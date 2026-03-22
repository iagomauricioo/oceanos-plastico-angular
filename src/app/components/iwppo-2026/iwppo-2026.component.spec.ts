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
});
