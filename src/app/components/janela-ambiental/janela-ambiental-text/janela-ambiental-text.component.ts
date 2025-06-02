import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstagramButtonComponent } from '../../shared/instagram-button/instagram-button.component';

@Component({
  selector: 'app-janela-ambiental-text',
  standalone: true,
  imports: [CommonModule, InstagramButtonComponent],
  template: `
    <div class="container mx-auto px-4 py-8 max-w-4xl">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-textWhite mb-4">
        {{ title }}
      </h2>
      <p class="text-lg text-textWhite mb-6 leading-relaxed">
        {{ description }}
      </p>
      <div class="flex justify-center sm:justify-start">
        <app-instagram-button [url]="instagramLink" text="Ver no Instagram"></app-instagram-button>
      </div>
    </div>
  `
})
export class JanelaAmbientalTextComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() instagramLink: string = '';
} 