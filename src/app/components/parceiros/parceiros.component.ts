import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { VideoComponent } from "../../shared/video/video.component";

@Component({
  selector: 'app-parceiros',
  standalone: true,
  imports: [
    NgFor,
    VideoComponent
],
  templateUrl: './parceiros.component.html',
  styleUrl: './parceiros.component.css'
})
export class ParceirosComponent {
  src = "https://www.youtube.com/watch?v=MLK8BcnmO2A"
  parceiros = [
    { src: 'assets/images/logotipos/webp/policoncret.webp', alt: 'Policoncret' },
    { src: 'assets/images/logotipos/webp/PPGASA.webp', alt: 'PPGASA' },
    { src: 'assets/images/logotipos/webp/CESMAC.webp', alt: 'CESMAC' },
    { src: 'assets/images/logotipos/webp/FAPEAL.webp', alt: 'FAPEAL' },
    { src: 'assets/images/logotipos/webp/CNPq.webp', alt: 'CNPq' },
    { src: 'assets/images/logotipos/webp/CAPES.webp', alt: 'CAPES' },
    { src: 'assets/images/logotipos/webp/unesco.webp', alt: 'UNESCO' },
    { src: 'assets/images/logotipos/webp/Advances in Cleaner Production Network.webp', alt: 'Advances in Cleaner Production Network' },
    { src: 'assets/images/logotipos/webp/Ocean Decade.webp', alt: 'Ocean Decade' }
  ];

  parceirosCdn = [
    { src: 'https://cdn.jsdelivr.net/gh/iagomauricioo/oceanos-plastico-angular/src/assets/images/logotipos/webp/policoncret.webp', alt: 'Policoncret' },
    { src: 'https://cdn.jsdelivr.net/gh/iagomauricioo/oceanos-plastico-angular/src/assets/images/logotipos/webp/PPGASA.webp', alt: 'PPGASA' },
    { src: 'https://cdn.jsdelivr.net/gh/iagomauricioo/oceanos-plastico-angular/src/assets/images/logotipos/webp/CESMAC.webp', alt: 'CESMAC' },
    { src: 'https://cdn.jsdelivr.net/gh/iagomauricioo/oceanos-plastico-angular/src/assets/images/logotipos/webp/FAPEAL.webp', alt: 'FAPEAL' },
    { src: 'https://cdn.jsdelivr.net/gh/iagomauricioo/oceanos-plastico-angular/src/assets/images/logotipos/webp/CNPq.webp', alt: 'CNPq' },
    { src: 'https://cdn.jsdelivr.net/gh/iagomauricioo/oceanos-plastico-angular/src/assets/images/logotipos/webp/CAPES.webp', alt: 'CAPES' },
    { src: 'https://cdn.jsdelivr.net/gh/iagomauricioo/oceanos-plastico-angular/src/assets/images/logotipos/webp/unesco.webp', alt: 'UNESCO' },
    { src: 'https://cdn.jsdelivr.net/gh/iagomauricioo/oceanos-plastico-angular/src/assets/images/logotipos/webp/Advances%20in%20Cleaner%20Production%20Network.webp', alt: 'Advances in Cleaner Production Network' },
    { src: 'https://cdn.jsdelivr.net/gh/iagomauricioo/oceanos-plastico-angular/src/assets/images/logotipos/webp/Ocean%20Decade.webp', alt: 'Ocean Decade' }
  ];
}
