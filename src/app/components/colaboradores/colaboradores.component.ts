import { Component } from '@angular/core';
import { ProfileCardComponent } from "../../shared/profile-card/profile-card.component";

@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css'
})
export class ColaboradoresComponent {

}
