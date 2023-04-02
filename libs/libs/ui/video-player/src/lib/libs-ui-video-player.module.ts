import { NgModule } from '@angular/core';
import {CommonModule, ViewportScroller} from '@angular/common';
import { VideoPlayerComponent } from './components/video-player/video-player.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VideoPlayerComponent],
  exports:[VideoPlayerComponent]
})
export class LibsUiVideoPlayerModule {}
