import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleSectionComponent } from '../divulgacao-cientifica/article-section/article-section.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CarouselComponent } from "../../shared/carousel/carousel.component";
import { NgFor } from '@angular/common';
import { JanelaAmbientalTextComponent } from "../janela-ambiental-text/janela-ambiental-text.component";
import { JanelaAmbientalImagesComponent } from "../janela-ambiental-images/janela-ambiental-images.component";
import { InstagramButtonComponent } from '../shared/instagram-button/instagram-button.component';

@Component({
  selector: 'app-janela-ambiental',
  standalone: true,
  imports: [
    CommonModule,
    ArticleSectionComponent,
    CarouselComponent,
    NgFor,
    JanelaAmbientalTextComponent,
    JanelaAmbientalImagesComponent,
    InstagramButtonComponent
  ],
  templateUrl: './janela-ambiental.component.html',
  styleUrl: './janela-ambiental.component.css'
})
export class JanelaAmbientalComponent {
  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  quadrinhos_01 = [
    'assets/images/quadrinhos/01/quadrinho1.jpeg',
    'assets/images/quadrinhos/01/quadrinho2.jpeg',
    'assets/images/quadrinhos/01/quadrinho3.jpeg',
    'assets/images/quadrinhos/01/quadrinho4.jpeg',
    'assets/images/quadrinhos/01/quadrinho5.jpeg',
    'assets/images/quadrinhos/01/quadrinho6.jpeg'
  ];

  quadrinhos_02 = [
    'assets/images/quadrinhos/02/quadrinho1.jpeg',
    'assets/images/quadrinhos/02/quadrinho2.jpeg',
    'assets/images/quadrinhos/02/quadrinho3.jpeg',
    'assets/images/quadrinhos/02/quadrinho4.jpeg',
    'assets/images/quadrinhos/02/quadrinho5.jpeg',
    'assets/images/quadrinhos/02/quadrinho6.jpeg'
  ];

  quadrinhos_03 = [
    'assets/images/quadrinhos/03/quadrinho1.jpeg',
    'assets/images/quadrinhos/03/quadrinho2.jpeg',
    'assets/images/quadrinhos/03/quadrinho3.jpeg',
    'assets/images/quadrinhos/03/quadrinho4.jpeg',
    'assets/images/quadrinhos/03/quadrinho5.jpeg',
    'assets/images/quadrinhos/03/quadrinho6.jpeg',
    'assets/images/quadrinhos/03/quadrinho7.jpeg'
  ];

  quadrinhos_04 = [
    'assets/images/quadrinhos/04/quadrinho1.jpeg',
    'assets/images/quadrinhos/04/quadrinho2.jpeg',
    'assets/images/quadrinhos/04/quadrinho3.jpeg',
    'assets/images/quadrinhos/04/quadrinho4.jpeg',
    'assets/images/quadrinhos/04/quadrinho5.jpeg',
    'assets/images/quadrinhos/04/quadrinho6.jpeg',
    'assets/images/quadrinhos/04/quadrinho7.jpeg',
  ]

  quadrinhos_05 = [
    'assets/images/quadrinhos/05/quadrinho1.jpeg',
    'assets/images/quadrinhos/05/quadrinho2.jpeg',
    'assets/images/quadrinhos/05/quadrinho3.jpeg',
    'assets/images/quadrinhos/05/quadrinho4.jpeg',
    'assets/images/quadrinhos/05/quadrinho5.jpeg',
    'assets/images/quadrinhos/05/quadrinho6.jpeg',
  ]
}
