import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-divulgacao-cientifica',
  standalone: true,
  imports: [],
  templateUrl: './divulgacao-cientifica.component.html',
  styleUrl: './divulgacao-cientifica.component.css'
})
export class DivulgacaoCientificaComponent {
  @ViewChild('videoFrame') videoFrame!: ElementRef<HTMLIFrameElement>;

  ngAfterViewInit() {
    setTimeout(() => {
      this.muteVideo();
    }, 2000);
  }

  muteVideo() {
    if (this.videoFrame?.nativeElement?.contentWindow) {
      this.videoFrame.nativeElement.contentWindow.postMessage(
        '{"event":"command","func":"mute","args":""}',
        '*'
      );
    }
  }
}
