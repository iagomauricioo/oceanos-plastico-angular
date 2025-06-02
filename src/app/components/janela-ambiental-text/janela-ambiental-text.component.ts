import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { InstagramButtonComponent } from '../shared/instagram-button/instagram-button.component';
@Component({
  selector: 'app-janela-ambiental-text',
  standalone: true,
  imports: [NgIf, InstagramButtonComponent],
  templateUrl: './janela-ambiental-text.component.html',
  styleUrl: './janela-ambiental-text.component.css'
})
export class JanelaAmbientalTextComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() instagramLink: string = '';
}
