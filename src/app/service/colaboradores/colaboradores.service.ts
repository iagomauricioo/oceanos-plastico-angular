import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PessoaDto } from '../../shared/dto/pessoa-dto';

@Injectable({
  providedIn: 'root',
})
export class ColaboradoresService {
  colaboradores: any[] = [];
  private apiUrl = 'https://server.oceanosdeplastico.com.br/colaborador';

  constructor(private http: HttpClient) { }

  getColaboradores(): Observable<PessoaDto[]> {
    return this.http.get<PessoaDto[]>(this.apiUrl).pipe(
      map((colaboradores) =>
        colaboradores.map((colaborador) => {
          const primeiroNome = colaborador.nome
            .split(' ')[0]
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();

          return {
            nome: colaborador.nome,
            cargo: colaborador.cargo,
            foto: `assets/images/${primeiroNome}.png`,
            linkedin: colaborador.linkedin,
            lattes: colaborador.lattes,
            isActived: colaborador.isActived,
          };
        })
      )
    );
  }

  getColaboradoresByInstituicao(instituicao: string): Observable<PessoaDto[]> {
    return this.http
      .get<PessoaDto[]>(`${this.apiUrl}/instituicao/${instituicao}`)
      .pipe(
        map((colaboradores) =>
          colaboradores.map((colaborador) => {
            let primeiroNome = colaborador.nome
              .split(' ')[0]
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLowerCase();
            if (colaborador.nome === 'Ana Vládia') {
              primeiroNome = 'anavladia';
            }
            if (colaborador.nome === 'Daniela Lima') {
              primeiroNome = 'danielalima';
            }
            const caminhoFoto = `assets/images/equipe/${primeiroNome}.png`;
            return {
              nome: colaborador.nome,
              cargo: colaborador.cargo,
              foto: caminhoFoto,
              linkedin: colaborador.linkedin,
              lattes: colaborador.lattes,
              isActived: colaborador.isActived,
            };
          })
        )
      );
  }

  ngOnInit(): void {
    this.getColaboradores().subscribe((data) => {
      this.colaboradores = data;
    });
  }
}
