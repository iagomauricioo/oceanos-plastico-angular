import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanosDePlasticoComponent } from './oceanos-de-plastico.component';

describe('OceanosDePlasticoComponent', () => {
  let component: OceanosDePlasticoComponent;
  let fixture: ComponentFixture<OceanosDePlasticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OceanosDePlasticoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OceanosDePlasticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {https://mail.google.com/mail/u/0/?hl=pt-BR#inbox
    expect(component).toBeTruthy();
  });
});
