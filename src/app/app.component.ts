import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MainComponent } from "./components/main/main.component";
import { FooterComponent } from "./components/footer/footer.component";
import { isPlatformBrowser } from '@angular/common';
import { ProjetosComponent } from "./components/projetos/projetos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MainComponent, FooterComponent, ProjetosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Oceanos de Plástico';

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
    }
  }
}
