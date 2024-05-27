import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-screen',
  templateUrl: './video-screen.component.html',
  styleUrls: ['./video-screen.component.scss']
})
export class VideoScreenComponent implements OnInit, OnDestroy {
  isFullScreen: boolean = false;

  constructor() {
  }

  ngOnInit() {
    // this.enterFullScreen();
  }

  ngOnDestroy() {
    this.exitFullScreen();
  }

  enterFullScreen() {
    if (!this.isFullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if ((document.documentElement as any).webkitRequestFullscreen) {
        (document.documentElement as any).webkitRequestFullscreen();
      } else if ((document.documentElement as any).msRequestFullscreen) {
        (document.documentElement as any).msRequestFullscreen();
      }
      this.isFullScreen = true;
    }
  }

  exitFullScreen() {
    if (this.isFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
      this.isFullScreen = false;
    }
  }


}
