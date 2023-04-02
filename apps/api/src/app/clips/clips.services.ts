import {ForbiddenException, Injectable} from "@nestjs/common";
import {HttpService} from "@nestjs/axios";
import {ClipsQueryParamDto} from "../../common/dtos/ClipsQueryParamDto";
import {ClipConstants} from "../../common/constants/ClipConstants";
import {catchError, map} from "rxjs";
import {SORT_BY} from "../../common/enums/sortBy";
import {SORT_ORDER} from "../../common/enums/sortDirection";

@Injectable()
export class ClipsServices{
  constructor(private httpService:HttpService) {
  }
  getClips(clipsQueryParams:ClipsQueryParamDto){
    clipsQueryParams.limit= clipsQueryParams.limit<=ClipConstants.DEFAULT_PAGE_SIZE?clipsQueryParams.limit:ClipConstants.DEFAULT_PAGE_SIZE;
    clipsQueryParams.sortBy=clipsQueryParams.sortBy?clipsQueryParams.sortBy:SORT_BY.DATE;
    clipsQueryParams.sortDirection=clipsQueryParams.sortDirection?clipsQueryParams.sortDirection:SORT_ORDER.DESC;

 const data=Object.keys(clipsQueryParams).map(key=>`${key}=${encodeURIComponent(clipsQueryParams[key])}`).join('&');
    return this.httpService.request({baseURL:ClipConstants.CLIPS_REMOTE_URL,
    method:'post',
      data:data,
        headers: {'content-type': 'application/x-www-form-urlencoded'},
  }
    ).pipe(map((res)=>{
      return res.data;
    })).pipe(catchError(()=>{
      throw  new ForbiddenException('API not available')
    }));
  }
}
