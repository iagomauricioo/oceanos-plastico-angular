import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  standalone: true,
  imports: [NgFor],
  templateUrl: './parceiros.component.html',
  styleUrl: './parceiros.component.css',
})
export class ParceirosComponent {
  src = 'https://www.youtube.com/watch?v=MLK8BcnmO2A';
  parceiros = [
    {
      src: 'assets/images/logotipos/webp/policoncret.webp',
      alt: 'Policoncret',
    },
    { src: 'assets/images/logotipos/webp/PPGASA.webp', alt: 'PPGASA' },
    { src: 'assets/images/logotipos/webp/CESMAC.webp', alt: 'CESMAC' },
    { src: 'assets/images/logotipos/webp/FAPEAL.webp', alt: 'FAPEAL' },
    { src: 'assets/images/logotipos/webp/CNPq.webp', alt: 'CNPq' },
    { src: 'assets/images/logotipos/webp/CAPES.webp', alt: 'CAPES' },
    { src: 'assets/images/logotipos/webp/unesco.webp', alt: 'UNESCO' },
    {
      src: 'assets/images/logotipos/webp/Advances in Cleaner Production Network.webp',
      alt: 'Advances in Cleaner Production Network',
    },
    {
      src: 'assets/images/logotipos/webp/Ocean Decade.webp',
      alt: 'Ocean Decade',
    },
  ];

  parceirosCdn = [
    {
      src: 'https://cdn.jsdelivr.net/gh/iagomauricioo/oceanos-plastico-angular/src/assets/images/logotipos/webp/policoncret.webp',
      alt: 'Policoncret',
      link: 'https://www.policoncret.com.br',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/iagomauricioo/oceanos-plastico-angular/src/assets/images/logotipos/webp/PPGASA.webp',
      alt: 'PPGASA',
      link: 'https://cesmac.edu.br/mestrado-profissional-analise-de-sistemas-ambientais/',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/iagomauricioo/oceanos-plastico-angular/src/assets/images/logotipos/webp/CESMAC.webp',
      alt: 'CESMAC',
      link: 'https://www.cesmac.edu.br',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/iagomauricioo/oceanos-plastico-angular/src/assets/images/logotipos/webp/FAPEAL.webp',
      alt: 'FAPEAL',
      link: 'https://www.fapeal.br',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/iagomauricioo/oceanos-plastico-angular/src/assets/images/logotipos/webp/CNPq.webp',
      alt: 'CNPq',
      link: 'http://www.cnpq.br',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/iagomauricioo/oceanos-plastico-angular/src/assets/images/logotipos/webp/CAPES.webp',
      alt: 'CAPES',
      link: 'https://www.gov.br/capes',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/iagomauricioo/oceanos-plastico-angular/src/assets/images/logotipos/webp/unesco.webp',
      alt: 'UNESCO',
      link: 'https://www.unesco.org',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/iagomauricioo/oceanos-plastico-angular/src/assets/images/logotipos/webp/Advances%20in%20Cleaner%20Production%20Network.webp',
      alt: 'Advances in Cleaner Production Network',
      link: 'https://www.advancesincleanerproduction.net',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/iagomauricioo/oceanos-plastico-angular/src/assets/images/logotipos/webp/Ocean%20Decade.webp',
      alt: 'Ocean Decade',
      link: 'https://www.oceandecade.org',
    },
  ];
}
