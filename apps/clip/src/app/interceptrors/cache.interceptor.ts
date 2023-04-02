import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, of, tap} from "rxjs";
import {HttpCacheService} from "../util-services/http-cache.service";

@Injectable()
export class CacheInterceptor implements HttpInterceptor{
  constructor(private cacheService: HttpCacheService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // pass along non-cacheable requests and invalidate cache
    if(req.method !== 'GET') {
      this.cacheService.invalidateCache();
      return next.handle(req);
    }

    // attempt to retrieve a cached response
    const cachedResponse: HttpResponse<any> | undefined = this.cacheService.get(req.url);

    // return cached response
    if (cachedResponse) {
      return of(cachedResponse);
    }
    // send request to server and add response to cache
    return next.handle(req)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            console.log(`Adding item to cache: ${req.url}`);
            this.cacheService.put(req.url, event);
          }
        })
      );

  }
}
