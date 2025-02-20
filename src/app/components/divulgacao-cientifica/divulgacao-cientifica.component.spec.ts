import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivulgacaoCientificaComponent } from './divulgacao-cientifica.component';

describe('DivulgacaoCientificaComponent', () => {
  let component: DivulgacaoCientificaComponent;
  let fixture: ComponentFixture<DivulgacaoCientificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivulgacaoCientificaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivulgacaoCientificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
