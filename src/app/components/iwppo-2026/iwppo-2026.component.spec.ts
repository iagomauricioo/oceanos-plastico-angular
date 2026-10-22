import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Iwppo2026Component } from './iwppo-2026.component';

describe('Iwppo2026Component', () => {
  let component: Iwppo2026Component;
  let fixture: ComponentFixture<Iwppo2026Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iwppo2026Component],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Iwppo2026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the three Aura cards only on November 20 in every language', () => {
    for (const language of ['pt', 'en', 'es'] as const) {
      component.setLanguage(language);
      fixture.detectChanges();
      const gallery = fixture.nativeElement.querySelector('[data-aura-experiences]') as HTMLElement;
      expect(gallery).not.toBeNull();
      expect(gallery?.closest('[data-schedule-date]')?.getAttribute('data-schedule-date')).toBe('2026-11-20');
      const cards = gallery?.querySelectorAll('a[data-aura-image]');
      expect(cards?.length).toBe(3);
      cards?.forEach(card => {
        const image = card.querySelector('img');
        expect(image?.getAttribute('src')).toBe(card.getAttribute('href'));
        expect(image?.getAttribute('alt')).toBeTruthy();
        expect(image?.getAttribute('loading')).toBe('lazy');
      });
      const contacts = gallery?.querySelectorAll('a[data-aura-contact]');
      expect(contacts?.length).toBe(3);
      contacts?.forEach(contact => {
        const url = new URL(contact.getAttribute('href')!);
        expect(url.origin).toBe('https://api.whatsapp.com');
        expect(url.searchParams.get('phone')).toBe('555191911504');
        expect(contact.textContent?.trim()).toBeTruthy();
        expect(contact.getAttribute('rel')).toBe('noopener noreferrer');
      });
    }
  });

  it('should show four important milestones instead of schedule activities in every language', () => {
    for (const [language, title, pending] of [
      ['pt', 'Datas importantes', 'ou enquanto durarem as inscrições'],
      ['en', 'Important dates', 'or while spaces last'],
      ['es', 'Fechas importantes', 'o mientras haya cupos'],
    ] as const) {
      component.setLanguage(language);
      fixture.detectChanges();
      const section = fixture.nativeElement.querySelector('[aria-labelledby="important-dates-title"]') as HTMLElement;
      expect(section.querySelector('h2')?.textContent).toContain(title);
      expect(section.querySelectorAll('li').length).toBe(4);
      expect(section.textContent).toContain(pending);
      expect(section.querySelectorAll('time').length).toBe(5);
      expect(Array.from(section.querySelectorAll('time'), time => time.getAttribute('datetime')))
        .toEqual(['2026-11-03', '2026-11-06', '2026-11-06', '2026-11-17', '2026-11-20']);
      expect(section.textContent).not.toContain(component.pageData.schedule[0].activities[0].title);
    }
  });

  it('should link the program button to the current route fragment', () => {
    const programLink = fixture.nativeElement.querySelector(
      'a[href$="#programacao"]',
    ) as HTMLAnchorElement | null;

    expect(programLink).not.toBeNull();
    expect(programLink?.hash).toBe('#programacao');
  });

  it('should format event dates according to the selected language', () => {
    component.setLanguage('pt');
    expect(component.formatEventDate('2026-11-17')).toBe('17/11/2026');

    component.setLanguage('en');
    expect(component.formatEventDate('2026-11-17')).toBe('11/17/2026');

    component.setLanguage('es');
    expect(component.formatEventDate('2026-11-17')).toBe('17/11/2026');
  });
});
