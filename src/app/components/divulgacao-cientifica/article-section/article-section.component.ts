import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { InstagramButtonComponent } from '../../shared/instagram-button/instagram-button.component';

@Component({
  selector: 'app-article-section',
  standalone: true,
  imports: [CommonModule, InstagramButtonComponent],
  templateUrl: './article-section.component.html'
})
export class ArticleSectionComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() content: string = '';
  @Input() videoUrl: SafeResourceUrl | null = null;
  @Input() youtubeChannelUrl: string = '';
  @Input() instagramUrl: string = '';
  @Input() reportUrl: string = '';
  @Input() reverseLayout: boolean = false;

  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 