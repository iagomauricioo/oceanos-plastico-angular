import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Policoncret } from './policoncret';

describe('Policoncret', () => {
  let component: Policoncret;
  let fixture: ComponentFixture<Policoncret>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Policoncret]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Policoncret);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
