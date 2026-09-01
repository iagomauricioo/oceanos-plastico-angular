import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iwppo2026Component } from './iwppo-2026.component';

describe('Iwppo2026Component', () => {
  let component: Iwppo2026Component;
  let fixture: ComponentFixture<Iwppo2026Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iwppo2026Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Iwppo2026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
