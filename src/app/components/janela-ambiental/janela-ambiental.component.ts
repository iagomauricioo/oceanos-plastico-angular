import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-janela-ambiental',
  standalone: true,
  imports: [NgFor],
  templateUrl: './janela-ambiental.component.html',
  styleUrl: './janela-ambiental.component.css'
})
export class JanelaAmbientalComponent {
  currentSlideIndex = 0;
  carouselItems = [
    { src: '/assets/images/quadrinhos/quadrinho1.jpeg' },
    { src: '/assets/images/quadrinhos/quadrinho2.jpeg' },
    { src: '/assets/images/quadrinhos/quadrinho3.jpeg' },
    { src: '/assets/images/quadrinhos/quadrinho4.jpeg' },
    { src: '/assets/images/quadrinhos/quadrinho5.jpeg' },
    { src: '/assets/images/quadrinhos/quadrinho6.jpeg' }
  ];

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.carouselItems.length;
  }

  previousSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
  }
}
