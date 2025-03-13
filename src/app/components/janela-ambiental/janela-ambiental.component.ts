import { Component } from '@angular/core';
import { CarouselComponent } from "../../shared/carousel/carousel.component";

@Component({
  selector: 'app-janela-ambiental',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './janela-ambiental.component.html',
  styleUrl: './janela-ambiental.component.css'
})
export class JanelaAmbientalComponent {
  quadrinhos = [
    'assets/images/quadrinhos/quadrinho1.jpeg',
    'assets/images/quadrinhos/quadrinho2.jpeg',
    'assets/images/quadrinhos/quadrinho3.jpeg',
    'assets/images/quadrinhos/quadrinho4.jpeg',
    'assets/images/quadrinhos/quadrinho5.jpeg',
    'assets/images/quadrinhos/quadrinho6.jpeg'
  ];
}
