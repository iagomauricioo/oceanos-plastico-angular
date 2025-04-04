import { Component } from '@angular/core';
import { ProfileCardComponent } from '../../shared/profile-card/profile-card.component';
import { NgFor, NgIf } from '@angular/common';
import { PessoaDto } from '../../shared/dto/pessoa-dto';
import { ColaboradoresService } from '../../service/colaboradores/colaboradores.service';
import { Router } from '@angular/router';
import { SkeletonCardComponent } from '../../shared/skeleton-card/skeleton-card.component';
import { ActivatedRoute } from '@angular/router';

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
    private router: Router,
    private route: ActivatedRoute
  ) {
    const urlPath = this.router.url.split('/').pop(); // pega 'lere', 'ppgasa', etc.
    console.log(urlPath);
    if (
      urlPath === 'lere' ||
      urlPath === 'ppgasa' ||
      urlPath === 'univassouras'
    ) {
      this.colaboradoresService
        .getColaboradoresByInstituicao(urlPath)
        .subscribe({
          next: (data) => {
            this.colaboradores = data;
            this.loading = false;
          },
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
      isActived: true,
    },
  ];

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
