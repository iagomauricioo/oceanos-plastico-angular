import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { NgFor, NgIf, isPlatformBrowser } from '@angular/common';
import { PessoaDto } from '../../shared/dto/pessoa-dto';
import { ColaboradoresService } from '../../service/colaboradores/colaboradores.service';
import { SkeletonCardComponent } from '../../shared/skeleton-card/skeleton-card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [ProfileCardComponent, NgFor, NgIf, SkeletonCardComponent],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css',
})
export class ColaboradoresComponent implements OnInit {
  pessoas: any[] = [];
  colaboradores: PessoaDto[] = [];
  loading = true;
  errorMessage = '';
  instituicao!: string;

  constructor(
    private colaboradoresService: ColaboradoresService,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) { }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.loading = false;
      return;
    }
    this.route.params.subscribe((params) => {
      this.instituicao = params['instituicao'];
      this.loadColaboradores();
    });
  }

  retry(): void {
    this.loadColaboradores();
  }

  private loadColaboradores(): void {
    this.loading = true;
    this.errorMessage = '';
      if (!this.instituicao) {
        this.colaboradoresService.getColaboradores().subscribe({
          next: (data) => {
            this.colaboradores = data;
            this.loading = false;
          },
          error: () => this.handleLoadError()
        });
        return;
      }
      this.colaboradoresService
        .getColaboradoresByInstituicao(this.instituicao)
        .subscribe({
          next: (data) => {
            this.colaboradores = data;
            this.loading = false;
          },
          error: () => this.handleLoadError(),
        });
  }

  private handleLoadError(): void {
    this.colaboradores = [];
    this.loading = false;
    this.errorMessage = 'Não foi possível carregar a equipe agora. Tente novamente em alguns instantes.';
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
