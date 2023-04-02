import {CacheInterceptor, Controller, Get, Query, UseInterceptors} from "@nestjs/common";
import {ClipsServices} from "./clips.services";
import {ClipsQueryParamDto} from "../../common/dtos/ClipsQueryParamDto";

@Controller('clips')
@UseInterceptors(CacheInterceptor)
 export class ClipsController{
 constructor(private clipsService:ClipsServices) {}
  @Get()
  getClips(@Query() clipsQueryDto:ClipsQueryParamDto){
   return this.clipsService.getClips(clipsQueryDto);
  }
}
