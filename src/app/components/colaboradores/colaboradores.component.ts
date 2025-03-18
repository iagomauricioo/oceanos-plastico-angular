import { Component } from '@angular/core';
import { ProfileCardComponent } from '../../shared/profile-card/profile-card.component';
import { NgFor, NgIf } from '@angular/common';
import { PessoaDto } from '../../shared/dto/pessoa-dto';
import { ColaboradoresService } from '../../service/colaboradores/colaboradores.service';
import { Router } from '@angular/router';
import { SkeletonCardComponent } from '../../shared/skeleton-card/skeleton-card.component';

@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [ProfileCardComponent, NgFor, NgIf, SkeletonCardComponent],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css',
})
export class ColaboradoresComponent {
  pessoas: any[] = [];
  colaboradores: PessoaDto[] = [];
  loading = true;

  constructor(
    private colaboradoresService: ColaboradoresService,
    private router: Router
  ) {
    if (this.router.url === '/equipe/ppgasa')
      this.colaboradores = this.desconhecido;
    else if (this.router.url === '/equipe/univassouras')
      this.colaboradores = this.desconhecido;
    else if (this.router.url === '/equipe/lere') {
      this.colaboradoresService.getColaboradores().subscribe(async (data) => {
        await this.sleep(1000);
        this.colaboradores = data;
        this.loading = false;
      });
    }
    else {
      this.loading = false;
    }
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

  async sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}