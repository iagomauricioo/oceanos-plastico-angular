import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanelaAmbientalTextComponent } from './janela-ambiental-text.component';

describe('JanelaAmbientalTextComponent', () => {
  let component: JanelaAmbientalTextComponent;
  let fixture: ComponentFixture<JanelaAmbientalTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JanelaAmbientalTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JanelaAmbientalTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
