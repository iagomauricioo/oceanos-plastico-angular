import { Component, Input } from '@angular/core';
import { PessoaDto } from '../dto/pessoa-dto';

@Component({
  selector: 'app-card-user',
  standalone: true,
  imports: [],
  templateUrl: './card-user.component.html',
  styleUrl: './card-user.component.css'
})
export class CardUserComponent {
  @Input()
  pessoa!: PessoaDto;
}
