import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-janela-ambiental-text',
  standalone: true,
  imports: [],
  templateUrl: './janela-ambiental-text.component.html',
  styleUrl: './janela-ambiental-text.component.css'
})
export class JanelaAmbientalTextComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() instagramLink: string = '';
}
