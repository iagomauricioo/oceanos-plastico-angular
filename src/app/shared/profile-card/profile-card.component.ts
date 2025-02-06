import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
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
      "linkedin": "https://www.linkedin.com/in/iagomauricio/"
    }
  ]
}
