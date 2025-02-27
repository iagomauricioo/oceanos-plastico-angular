import { Component } from '@angular/core';
import { ProfileCardComponent } from '../../shared/profile-card/profile-card.component';
import { NgFor } from '@angular/common';
import { PessoaDto } from '../../shared/dto/pessoa-dto';
import { ColaboradoresService } from '../../service/colaboradores/colaboradores.service';
import { Router } from '@angular/router';

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


  constructor(
    private colaboradoresService: ColaboradoresService,
    private router: Router
  ) {
    if (this.router.url === '/equipe/ppgasa')
      this.colaboradores = this.desconhecido;
    else if (this.router.url === '/equipe/univassouras')
      this.colaboradores = this.desconhecido;
    else if (this.router.url === '/equipe/lere') {
      this.colaboradoresService.getColaboradores().subscribe((data) => {
        this.colaboradores = data;
      });
    }
  }

  desconhecido = [
    {
      nome: 'Desconhecido',
      cargo: 'Pesquisador',
      foto: 'assets/images/profile.png',
      linkedin: '',
      lattes: '',
    },
  ];
}
