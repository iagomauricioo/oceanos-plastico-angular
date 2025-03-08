import { Component, OnInit } from '@angular/core';
import { PessoaDto } from '../../shared/dto/pessoa-dto';
import { CardUserComponent } from "../../shared/card-user/card-user.component";
import { NgFor } from '@angular/common';
import { ColaboradoresService } from '../../service/colaboradores/colaboradores.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CardUserComponent,
    NgFor
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  colaboradores: PessoaDto[] = [];

  constructor(private colaboradoresService: ColaboradoresService) {}

  ngOnInit(): void {
    this.carregarColaboradores();
  }

  carregarColaboradores(): void {
    this.colaboradoresService.getColaboradores().subscribe(
      (data) => {
        this.colaboradores = data;
      },
      (error) => {
        console.error('Erro ao carregar colaboradores:', error);
      }
    );
  }
}
