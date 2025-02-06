import { Component, Input } from '@angular/core';
import { PessoaDto } from '../dto/pessoa-dto';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  @Input()
  pessoa!: PessoaDto;
}