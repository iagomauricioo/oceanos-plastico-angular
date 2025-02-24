import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FlagUsComponent } from '../flags-navbar/flag-us/flag-us.component';
import { FlagBrazilComponent } from '../flags-navbar/flag-brazil/flag-brazil.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FlagBrazilComponent,
    FlagUsComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
}
