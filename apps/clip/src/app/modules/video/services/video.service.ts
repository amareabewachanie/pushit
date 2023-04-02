import {Injectable} from "@angular/core";
import {VideoListComponent} from "../pages/video-list/video-list.component";
import {VideoModule} from "../video.module";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Video} from "@pushit/api-interfaces";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn:'any'
})
export class VideoService{
  clipsUrl=environment.clipsUrl;
  constructor(private http:HttpClient) {
  }
  getVideos(clipId:number,page=1,limit=10,sortBy='date',sortDirection='desc'){
    return this.http.get(this.clipsUrl,{
      params:new HttpParams()
        .set('clipId',clipId)
        .set('page',page)
        .set('limit',limit)
        .set('sortBy',sortBy)
        .set('sortDirection',sortDirection)
    })
  }
}
