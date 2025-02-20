import { Injectable } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Injectable({
  providedIn: 'root'
})
export class ScrollRevealService {
  private sr: scrollReveal.ScrollRevealObject;

  constructor() {
    this.sr = ScrollReveal();
  }

  reveal(selector: string, options?: scrollReveal.ScrollRevealObjectOptions) {
    this.sr.reveal(selector, options || {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      reset: false
    });
  }
}
