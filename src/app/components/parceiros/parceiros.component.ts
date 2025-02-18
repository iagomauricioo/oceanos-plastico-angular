import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './parceiros.component.html',
  styleUrl: './parceiros.component.css'
})
export class ParceirosComponent {
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
}
