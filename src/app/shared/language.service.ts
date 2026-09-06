import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export type SiteLanguage = 'pt' | 'en' | 'es';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly languageSubject = new BehaviorSubject<SiteLanguage>('pt');
  private initialized = false;

  readonly language$ = this.languageSubject.asObservable();
  readonly languages: SiteLanguage[] = ['pt', 'en', 'es'];

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}

  get currentLanguage(): SiteLanguage {
    return this.languageSubject.value;
  }

  initializeFromStorage(): void {
    if (this.initialized) return;
    this.initialized = true;

    if (!isPlatformBrowser(this.platformId)) return;

    const storedLanguage = localStorage.getItem('site-language');
    if (storedLanguage === 'pt' || storedLanguage === 'en' || storedLanguage === 'es') {
      this.languageSubject.next(storedLanguage);
    }
  }

  setLanguage(language: SiteLanguage): void {
    if (this.languageSubject.value === language) return;

    this.languageSubject.next(language);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('site-language', language);
    }
  }
}
