import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-left',
  standalone: true,
  imports: [NgIf],
  templateUrl: './message-left.component.html',
  styleUrl: './message-left.component.css',
})
export class MessageLeftComponent {
  @Input() sender: string = ''; 
  @Input() time: string = ''; 
  @Input() message: string = '';
}
