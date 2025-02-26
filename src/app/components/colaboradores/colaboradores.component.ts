import { Component } from '@angular/core';
import { ProfileCardComponent } from '../../shared/profile-card/profile-card.component';
import { NgFor } from '@angular/common';
import { PessoaDto } from '../../shared/dto/pessoa-dto';
import { ColaboradoresService } from '../../service/colaboradores.service';

@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [ProfileCardComponent, NgFor],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css',
})
export class ColaboradoresComponent {
  pessoas: any[] = [];
  colaboradores: PessoaDto[] = [];

  ngOnInit(): void {
    this.colaboradoresService.getColaboradores().subscribe((data) => {
      this.colaboradores = data;
    });
  }

  constructor(private colaboradoresService: ColaboradoresService) {}
}
