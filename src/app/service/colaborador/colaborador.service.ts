import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ColaboradorService {
  private apiUrl = 'http://localhost:3000/colaborador';

  constructor(private http: HttpClient) {}

  getColaboradores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((colaboradores) =>
        colaboradores.map((colaborador) => ({
          nome: colaborador.nome,
          cargo: colaborador.cargo,
          foto: `assets/images/${colaborador.nome
            .toLowerCase()
            .replace(/ /g, '')}.png`,
          linkedin: colaborador.linkedin,
          lattes: colaborador.lattes,
        }))
      )
    );
  }
}
