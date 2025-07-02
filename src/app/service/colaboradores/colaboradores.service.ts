import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PessoaDto } from '../../shared/dto/pessoa-dto';

@Injectable({
  providedIn: 'root',
})
export class ColaboradoresService {
  colaboradores: any[] = [];
  private apiUrl = 'http://186.235.156.135:8080/colaborador';

  constructor(private http: HttpClient) {}

  getColaboradores(): Observable<PessoaDto[]> {
    return this.http.get<PessoaDto[]>(this.apiUrl).pipe(
      map((colaboradores) =>
        colaboradores.map((colaborador) => {
          let primeiroNome = colaborador.nome
            .split(' ')[0]
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();

          let caminhoFoto = `assets/images/equipe/${primeiroNome}.png`;
          this.validarFotoECurriculo(primeiroNome, colaborador, caminhoFoto);
          return {
            nome: colaborador.nome,
            cargo: colaborador.cargo,
            foto: caminhoFoto,
            linkedin: colaborador.linkedin,
            lattes: colaborador.lattes,
            isActived: colaborador.isActived,
            baixarCurriculo: colaborador.baixarCurriculo,
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
            let caminhoFotoTemp = `assets/images/equipe/${primeiroNome}.png`;
            const [caminhoFoto, baixarCurriculo] = this.validarFotoECurriculo(primeiroNome, colaborador, caminhoFotoTemp);
            return {
              nome: colaborador.nome,
              cargo: colaborador.cargo,
              foto: caminhoFoto,
              linkedin: colaborador.linkedin,
              lattes: colaborador.lattes,
              isActived: colaborador.isActived,
              baixarCurriculo: baixarCurriculo,
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

  validarFotoECurriculo(nome: string, colaborador: PessoaDto, caminhoFoto: string): [string, string] {
    let primeiroNome = nome
      .split(' ')[0]
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
    if (colaborador.nome === 'Ana Vládia') {
      caminhoFoto = 'assets/images/equipe/anavladia2.png';
    }
    if (colaborador.nome === 'Daniela Lima') {
      caminhoFoto = 'assets/images/equipe/danielalima.png';
    }
    if (colaborador.nome === 'Filipe Pereira') {
      colaborador.baixarCurriculo = 'assets/docs/cv-algarve-filipe.pdf';
    }
    if (colaborador.nome === 'Helena Fernandez') {
      caminhoFoto = 'assets/images/equipe/helena-fernandez.png';
      colaborador.baixarCurriculo = 'assets/docs/breve_CV_Helena Fernandez.pdf';
    }
    if (colaborador.nome === 'Fernando Miguel') {
      colaborador.baixarCurriculo = 'assets/docs/CV_breve_fernando_miguel.pdf';
    }
    return [caminhoFoto, colaborador.baixarCurriculo];
  }
}
