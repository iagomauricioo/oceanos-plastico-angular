import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { initAccordions } from 'flowbite';

@Component({
  selector: 'app-apresentacao-accordion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './apresentacao-accordion.component.html',
  styleUrl: './apresentacao-accordion.component.css'
})
export class ApresentacaoAccordionComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    initAccordions();
  }
}
