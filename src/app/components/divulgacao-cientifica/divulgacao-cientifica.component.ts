import { Component } from '@angular/core';
import { VideoComponent } from "../../shared/video/video.component";

@Component({
  selector: 'app-divulgacao-cientifica',
  standalone: true,
  imports: [VideoComponent],
  templateUrl: './divulgacao-cientifica.component.html',
  styleUrl: './divulgacao-cientifica.component.css',
})
export class DivulgacaoCientificaComponent {
}
