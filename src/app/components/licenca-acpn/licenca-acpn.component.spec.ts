import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicencaAcpnComponent } from './licenca-acpn.component';

describe('LicencaAcpnComponent', () => {
  let component: LicencaAcpnComponent;
  let fixture: ComponentFixture<LicencaAcpnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicencaAcpnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicencaAcpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
