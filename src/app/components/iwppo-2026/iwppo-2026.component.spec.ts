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

  it('should show INPA as an event partner with its supplied logo in every language', () => {
    const name = 'Instituto Nacional de Pesquisas da Amazônia (INPA)';
    for (const language of ['pt', 'en', 'es'] as const) {
      component.setLanguage(language);
      fixture.detectChanges();
      const partner = component.partners.find(partner => partner.name === name);
      expect(partner?.category).toBe('partner');
      expect(partner?.logo).toBe('assets/images/iwppo-2026/partners/inpa.png');
      const image = fixture.nativeElement.querySelector('#parceiros img[alt="' + name + '"]') as HTMLImageElement;
      expect(image).not.toBeNull();
      expect(image?.getAttribute('src')).toBe('assets/images/iwppo-2026/partners/inpa.png');
      expect(image?.classList.contains('object-contain')).toBeTrue();
    }
  });

  it('should show the seven moderators on their corresponding activities in every language', () => {
    const assignments = [
      ['2026-11-17', 3, 'Kátia Viana Cavalcante'],
      ['2026-11-18', 0, 'Guilherme Silva Modoro'],
      ['2026-11-18', 1, 'Mônica Alves de Vasconcelos'],
      ['2026-11-18', 5, 'Santiago Linório Ferreyra Ramos'],
      ['2026-11-18', 6, 'Maria Teresa Gomes Lopes'],
      ['2026-11-18', 8, 'Francimara Souza da Costa'],
      ['2026-11-19', 0, 'Jessé Marques'],
    ] as const;
    for (const language of ['pt', 'en', 'es'] as const) {
      component.setLanguage(language);
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelectorAll('[data-activity-moderator]').length).toBe(7);
      for (const [date, index, name] of assignments) {
        const day = component.pageData.schedule.find(day => day.date === date)!;
        const activity = day.activities[index];
        const section = fixture.nativeElement.querySelector(`[data-schedule-date="${date}"]`) as HTMLElement;
        const card = Array.from(section.querySelectorAll('article'))
          .find(card => card.textContent?.includes(activity.title));
        const moderator = card?.querySelector('[data-activity-moderator]');
        expect(moderator?.textContent).toContain(name);
        expect(moderator?.textContent).toContain(language === 'pt' ? 'Modera' : language === 'en' ? 'Moderator' : 'Modera');
      }
    }
  });

  it('should register the forwarded panel speakers with their photos separately from moderators', () => {
    for (const language of ['pt', 'en', 'es'] as const) {
      component.setLanguage(language);
      fixture.detectChanges();
      for (const [index, name, photo] of [
        [6, 'Genilson Pereira Santana', 'genilson.jpeg'],
        [8, 'Deivison Carvalho Molinari', 'deivison.jpeg'],
      ] as const) {
        const panel = component.pageData.schedule.find(day => day.date === '2026-11-18')!.activities[index];
        expect(panel.speakers).toContain(name);
        const speaker = component.pageData.speakers.find(speaker => speaker.name === name);
        expect(speaker?.photo).toBe(`assets/images/iwppo-2026/people/${photo}`);
        expect(speaker?.talkTitle).toBe(panel.title);
        const image = fixture.nativeElement.querySelector(`#palestrantes img[alt="${name}"]`);
        expect(image?.getAttribute('src')).toBe(speaker?.photo);
      }
    }
  });

  it('should show the UFAM South Sector venue with an accessible map in every language', () => {
    const address = 'Universidade Federal do Amazonas, Av. Jauary Marinho - Setor Sul, Manaus, 69000-000, AM, BR';
    for (const language of ['pt', 'en', 'es'] as const) {
      component.setLanguage(language);
      fixture.detectChanges();
      const section = fixture.nativeElement.querySelector('#localizacao') as HTMLElement;
      expect(section).not.toBeNull();
      expect(section?.textContent).toContain(address);
      expect(component.pageData.hostInstitution.address).toBe(address);
      const map = section?.querySelector('iframe');
      expect(map?.title).toBe(`${component.pageData.ui.eventCard.location} — ${component.pageData.hostInstitution.name}`);
      expect(map?.getAttribute('loading')).toBe('lazy');
      const mapUrl = new URL(map!.src);
      expect(mapUrl.origin).toBe('https://www.google.com');
      expect(mapUrl.searchParams.get('q')).toBe(address);
      expect(mapUrl.searchParams.get('output')).toBe('embed');
      const link = section?.querySelector('a');
      expect(new URL(link!.href).searchParams.get('query')).toBe(address);
      expect(link?.rel).toBe('noopener noreferrer');
    }
  });

  it('should show and link the communication email in every language', () => {
    for (const language of ['pt', 'en', 'es'] as const) {
      component.setLanguage(language);
      fixture.detectChanges();
      const contact = fixture.nativeElement.querySelector(
        'a[href="mailto:iwppo@unisanta.br"]',
      ) as HTMLAnchorElement | null;
      expect(contact).not.toBeNull();
      expect(contact?.textContent?.trim()).toBe('iwppo@unisanta.br');
    }
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
