import { SpinnerIndicatorService } from '@pushit/libs/ui/spinner';
import { ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {Video} from "@pushit/api-interfaces";

import {VideoService} from "../../services/video.service";

@Component({
  selector: "pushit-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.scss"]
})
export class  VideoListComponent implements OnInit {
  videos:Video[]=[];
  currentVideo!:Video;
  totalRow!:number;
  currentPage=0;
  pageLimit=10;
  loading=false
  constructor(private videoService:VideoService,private readonly cd:ChangeDetectorRef,private readonly loadingIndicatorService:SpinnerIndicatorService) {
    loadingIndicatorService.onLoadingChanged.subscribe(
      (isLoading) =>{
         (this.loading = isLoading)}
    );
  }
  ngOnInit(): void {
   this.fetchVideosFromApi();
  }
  fetchVideosFromApi(){
    this.videoService.getVideos(0,this.currentPage,this.pageLimit,'','')
      .subscribe((data:any)=>{
        this.videos.push(...data.clips);
        this.totalRow=data.totalrows;
        this.currentVideo=this.videos[0]
        this.cd.detectChanges()
        this.cd.markForCheck()
      })
  }
  videoSelected(selectedVideo:Video){
    this.currentVideo=selectedVideo;
  }
  onVideoListScrolled(event:any){
     const scrollHeight=event.target.scrollHeight;
     const scrollTop=event.target.scrollTop;
     const clientHeight=event.target.clientHeight;
     const scrollPosition=scrollHeight -(scrollTop + clientHeight);
     if(scrollPosition===0 && this.totalRow>this.currentPage){
       this.currentPage++;
       this.fetchVideosFromApi();
     }
   }
}
