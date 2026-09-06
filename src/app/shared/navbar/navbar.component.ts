import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FlagUsComponent } from '../flags-navbar/flag-us/flag-us.component';
import { FlagBrazilComponent } from '../flags-navbar/flag-brazil/flag-brazil.component';
import { LanguageService, SiteLanguage } from '../language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FlagBrazilComponent,
    FlagUsComponent,
    NgFor,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  readonly languages: SiteLanguage[] = ['pt', 'en', 'es'];

  constructor(readonly languageService: LanguageService) {
    this.languageService.initializeFromStorage();
  }

  setLanguage(language: SiteLanguage): void {
    this.languageService.setLanguage(language);
  }

  languageLabel(language: SiteLanguage): string {
    return { pt: 'Português (PT-BR)', en: 'English (US)', es: 'Español (ES)' }[language];
  }
}
