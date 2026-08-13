import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliconcretComponent } from './policoncret.component';

describe('Policoncret', () => {
  let component: PoliconcretComponent;
  let fixture: ComponentFixture<PoliconcretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliconcretComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliconcretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should keep section links on the Policoncret route', () => {
    const links = Array.from(
      fixture.nativeElement.querySelectorAll('.pc-nav a'),
    ) as HTMLAnchorElement[];

    expect(links.length).toBe(6);
    expect(links.every((link) => link.pathname.endsWith('/policoncret'))).toBeTrue();
    expect(links.map((link) => link.hash)).toContain('#sec-contato');
  });
});
