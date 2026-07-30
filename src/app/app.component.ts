import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Oceanos de Plástico';
  isPoliconcretRoute = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router
  ) {
    this.updateLayout(this.router.url);
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.updateLayout(event.urlAfterRedirects));
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
    }
  }

  private updateLayout(url: string): void {
    this.isPoliconcretRoute = url.split('?')[0] === '/policoncret';
  }
}
