import { Component, inject, OnInit } from '@angular/core';
import { ProfileCardComponent } from '../../shared/profile-card/profile-card.component';
import { NgFor } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderByPipe } from './order-by.pipe';
import { ColaboradorService } from '../../service/colaborador/colaborador.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PessoaDto } from '../../shared/dto/pessoa-dto';

@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [ProfileCardComponent, NgFor, OrderByPipe, HttpClientModule],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css',
})
export class ColaboradoresComponent {
  pessoas: any[] = [];
  colaboradores: any[] = [];
  private apiUrl = 'http://localhost:3000/colaborador';

  http = inject(HttpClient);

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

  constructor(private router: Router, private route: ActivatedRoute) {
    if (this.router.url === '/colaboradores/lere')
      this.pessoas = this.pessoasLere;
    else if (this.router.url === '/colaboradores/ppgasa')
      this.pessoas = this.pessoasPpgasa;
    else if (this.router.url === '/colaboradores/univassouras')
      this.pessoas = this.pessoasUnivassouras;
  }

  pessoasLere = [
    /* Falta:
      Linkedin de Márcio Berto
    */
    {
      nome: 'Jessé Marques',
      cargo: 'Coordenador e idealizador',
      foto: 'assets/images/jesse.png',
      linkedin: 'https://www.linkedin.com/in/dr-jess%C3%A9-marques-6949b8236/',
      lattes: 'http://lattes.cnpq.br/2811263859126204',
    },
    {
      nome: 'Iago Mauricio',
      cargo: 'Desenvolvedor Python e Angular',
      foto: 'assets/images/iago.png',
      linkedin: 'https://www.linkedin.com/in/iagomauricioo/',
      lattes: 'http://lattes.cnpq.br/6076150135832214',
    },
    {
      nome: 'Alessandro Sarmento',
      cargo: 'Pesquisador',
      foto: 'assets/images/alessandro2.png',
      linkedin:
        'https://www.linkedin.com/in/alessandro-sarmento-cavalcanti-01498227/',
      lattes:
        'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4706903P5',
    },
    {
      nome: 'Marcelo Reis',
      cargo: 'Pesquisador',
      foto: 'assets/images/marcelo.png',
      linkedin: 'https://www.linkedin.com/in/marcelo-reis-24133997/',
      lattes: 'http://lattes.cnpq.br/5766916493726386',
    },
    {
      nome: 'Clarissa Soares',
      cargo: 'Pesquisador',
      foto: 'assets/images/clarissa.png',
      linkedin:
        'https://www.linkedin.com/in/clarissasoares-engcivil-engsegurancadotrabalho/',
      lattes:
        'https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4942496P0',
    },
    {
      nome: 'Thyago Soares',
      cargo: 'Pesquisador',
      foto: 'assets/images/thyago.png',
      linkedin:
        'https://www.linkedin.com/in/thyago-anthony-soares-lima-b7004963/',
      lattes: 'http://lattes.cnpq.br/1714186197608991',
    },
    {
      nome: 'Márcio Berto',
      cargo: 'Pesquisador',
      foto: 'assets/images/marcio.png',
      linkedin: '',
      lattes: 'http://lattes.cnpq.br/5527925471049709',
    },
    {
      nome: 'Victoria Kamille',
      cargo: 'Pesquisador',
      foto: 'assets/images/victoria.png',
      linkedin:
        'https://www.linkedin.com/in/victoria-kamille-de-castro-almeida-22856723b',
      lattes:
        'https://buscatextual.cnpq.br/buscatextual/visualizacv.do;jsessionid=C973EC0014F5148E1B6B2279689CE78C.buscatextual_0',
    },
    {
      nome: 'Erivelto Souza',
      cargo: 'Pesquisador / Produtor audiovisual',
      foto: 'assets/images/erivelto.png',
      linkedin: 'https://www.linkedin.com/in/erivelto-souza-320721271/',
      lattes:
        'https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K2496458D4',
    },
  ];

  pessoasPpgasa = [
    {
      nome: 'Desconhecido PPGASA',
      cargo: 'Pesquisador',
      foto: 'assets/images/profile.png',
      linkedin: '',
      lattes: '',
    },
  ];

  pessoasUnivassouras = [
    {
      nome: 'Desconhecido Univassouras',
      cargo: 'Pesquisador',
      foto: 'assets/images/profile.png',
      linkedin: '',
      lattes: '',
    },
  ];
}
