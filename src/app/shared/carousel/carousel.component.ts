import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  @Input()
  images: string[] = [];

  activeIndex: number = 0;

  setActiveIndex(index: number): void {
    this.activeIndex = index;
  }

  previousImage(): void {
    this.activeIndex =
      (this.activeIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage(): void {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }
  
}
