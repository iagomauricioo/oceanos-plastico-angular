import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { ProjetosComponent } from '../projetos/projetos.component';
import { ParceirosComponent } from "../parceiros/parceiros.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainComponent,
    ProjetosComponent,
    ParceirosComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
 
}
