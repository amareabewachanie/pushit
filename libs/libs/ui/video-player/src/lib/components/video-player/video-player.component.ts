import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Video} from '@pushit/api-interfaces';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'pushit-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnChanges{
  @Input() currentVideo!:Video
  selectedVideoLink!:SafeResourceUrl
  constructor(private sanitizer: DomSanitizer){}
  ngOnChanges(changes: SimpleChanges): void {
   if(this.currentVideo){
    this.getSelectedVideoLink(this.currentVideo)
   }
  }

  getSelectedVideoLink(currentVideo:Video){
    const forIframe=this.currentVideo.clipURL?.replace('watch','embed')
    this.selectedVideoLink = this.sanitizer.bypassSecurityTrustResourceUrl(forIframe??'');
  }
}
