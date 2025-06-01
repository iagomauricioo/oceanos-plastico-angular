import { Component, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-section.component.html'
})
export class ArticleSectionComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() content: string = '';
  @Input() videoUrl?: SafeResourceUrl;
  @Input() reverseLayout: boolean = false;
  @Input() youtubeChannelUrl?: string;
  @Input() instagramUrl?: string;
  @Input() reportUrl?: string;
} 