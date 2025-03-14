import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { ProjetosComponent } from '../projetos/projetos.component';
import { ParceirosComponent } from "../parceiros/parceiros.component";
import { ApresentacaoAccordionComponent } from "../apresentacao-accordion/apresentacao-accordion.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainComponent,
    ProjetosComponent,
    ParceirosComponent,
    ApresentacaoAccordionComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
 
}
