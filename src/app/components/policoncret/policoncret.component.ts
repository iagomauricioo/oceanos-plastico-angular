import { Component } from '@angular/core';

@Component({
  selector: 'app-policoncret',
  standalone: true,
  templateUrl: './policoncret.component.html',
  styleUrl: './policoncret.component.css'
})
export class PoliconcretComponent {
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
