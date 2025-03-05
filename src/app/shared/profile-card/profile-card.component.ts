import { Component, Input } from '@angular/core';
import { PessoaDto } from '../dto/pessoa-dto';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  @Input()
  pessoa!: PessoaDto;
}