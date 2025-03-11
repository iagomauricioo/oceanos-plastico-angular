import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanelaAmbientalComponent } from './janela-ambiental.component';

describe('JanelaAmbientalComponent', () => {
  let component: JanelaAmbientalComponent;
  let fixture: ComponentFixture<JanelaAmbientalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JanelaAmbientalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JanelaAmbientalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
