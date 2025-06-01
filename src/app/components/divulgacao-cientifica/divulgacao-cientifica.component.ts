import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleSectionComponent } from './article-section/article-section.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-divulgacao-cientifica',
  standalone: true,
  imports: [CommonModule, ArticleSectionComponent],
  templateUrl: './divulgacao-cientifica.component.html',
  styleUrl: './divulgacao-cientifica.component.css',
})
export class DivulgacaoCientificaComponent {
  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
