import {Injectable} from '@angular/core'
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { finalize } from 'rxjs/operators';
import { SpinnerIndicatorService } from '@pushit/libs/ui/spinner';
@Injectable({
  providedIn: 'root'
})
export class SpinnerInterceptService implements HttpInterceptor {

  constructor(private readonly loadingIndicatorService: SpinnerIndicatorService) {}

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // emit onStarted event before request execution
    this.loadingIndicatorService.onStarted(req);

    return next
      .handle(req)
      // emit onFinished event after request execution
      .pipe(finalize(() => {
        setTimeout(this.killTime(), 1000);
        this.loadingIndicatorService.onFinished(req);
        }
      ));
  }
  killTime() :any{

  }
}
