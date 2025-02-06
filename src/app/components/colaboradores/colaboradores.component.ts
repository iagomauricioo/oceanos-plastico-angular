import { Component } from '@angular/core';
import { ProfileCardComponent } from "../../shared/profile-card/profile-card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [
    ProfileCardComponent,
    NgFor
  ],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css'
})
export class ColaboradoresComponent {
  pessoas = [
    {
      "nome": "Jessé Marques",
      "cargo": "Coordenador e idealizador",
      "foto": "assets/images/jesse.png",
      "linkedin": "https://www.linkedin.com/in/dr-jess%C3%A9-marques-6949b8236/"
    },
    {
      "nome": "Iago Mauricio",
      "cargo": "Desenvolvedor Python e Angular",
      "foto": "assets/images/iago.png",
      "linkedin": "https://www.linkedin.com/in/iagomauricioo/"
    },
    {
      "nome": "Alessandro Sarmento",
      "cargo": "Pesquisador",
      "foto": "assets/images/jesse.png",
      "linkedin": "https://www.linkedin.com/in/iagomauricioo/"
    },
    {
      "nome": "Marcelo Reis",
      "cargo": "Pesquisador",
      "foto": "assets/images/jesse.png",
      "linkedin": "https://www.linkedin.com/in/iagomauricioo/"
    },
    {
      "nome": "Clarissa",
      "cargo": "Pesquisador",
      "foto": "assets/images/jesse.png",
      "linkedin": "https://www.linkedin.com/in/iagomauricioo/"
    },
    {
      "nome": "Thiago",
      "cargo": "Pesquisador",
      "foto": "assets/images/jesse.png",
      "linkedin": "https://www.linkedin.com/in/iagomauricioo/"
    },
  ]
}
