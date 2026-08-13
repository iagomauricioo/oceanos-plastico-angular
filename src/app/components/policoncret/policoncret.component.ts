import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-policoncret',
  standalone: true,
  imports: [RouterLink],
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
