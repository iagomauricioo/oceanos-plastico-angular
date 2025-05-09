import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-janela-ambiental-images',
  standalone: true,
  imports: [NgFor],
  templateUrl: './janela-ambiental-images.component.html',
  styleUrl: './janela-ambiental-images.component.css'
})
export class JanelaAmbientalImagesComponent {
  @Input() images: string[] = [];
}
