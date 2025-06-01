import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-right',
  standalone: true,
  imports: [],
  templateUrl: './message-right.component.html',
  styleUrl: './message-right.component.css',
})
export class MessageRightComponent {
  @Input() sender: string = '';
  @Input() time: string = '';
  @Input() message: string = '';
}
