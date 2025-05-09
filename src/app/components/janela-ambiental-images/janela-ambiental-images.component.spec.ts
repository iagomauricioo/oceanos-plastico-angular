import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanelaAmbientalImagesComponent } from './janela-ambiental-images.component';

describe('JanelaAmbientalImagesComponent', () => {
  let component: JanelaAmbientalImagesComponent;
  let fixture: ComponentFixture<JanelaAmbientalImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JanelaAmbientalImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JanelaAmbientalImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
