import { Component, OnInit } from '@angular/core';
import { ProfileCardComponent } from '../../shared/profile-card/profile-card.component';
import { NgFor } from '@angular/common';
import { PessoaDto } from '../../shared/dto/pessoa-dto';
import { ColaboradoresService } from '../../service/colaboradores/colaboradores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [ProfileCardComponent, NgFor],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css',
})
export class ColaboradoresComponent implements OnInit {
  pessoas: PessoaDto[] = [];
  colaboradores: PessoaDto[] = [];


  constructor(
    private colaboradoresService: ColaboradoresService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const grupo = params.get('grupo');

      if (grupo === 'ppgasa' || grupo === 'univassouras') {
        this.colaboradores = this.desconhecido;
      } else if (grupo === 'lere') {
        this.colaboradoresService.getColaboradores().subscribe(data => {
          this.colaboradores = data;
        });
      }
    });
  }

  desconhecido = [
    {
      nome: 'Desconhecido',
      cargo: 'Pesquisador',
      foto: 'assets/images/profile.png',
      linkedin: '',
      lattes: '',
      isActived: true
    },
  ];
}
