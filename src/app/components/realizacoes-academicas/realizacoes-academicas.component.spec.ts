import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizacoesAcademicasComponent } from './realizacoes-academicas.component';

describe('RealizacoesAcademicasComponent', () => {
  let component: RealizacoesAcademicasComponent;
  let fixture: ComponentFixture<RealizacoesAcademicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealizacoesAcademicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealizacoesAcademicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
