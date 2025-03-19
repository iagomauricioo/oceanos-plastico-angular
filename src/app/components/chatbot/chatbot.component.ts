import { ChangeDetectorRef, Component } from '@angular/core';
import { MessageLeftComponent } from '../../shared/message-left/message-left.component';
import { MessageRightComponent } from '../../shared/message-right/message-right.component';
import { ChatbotService } from '../../service/chatbot/chatbot.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { MessageDTO } from '../../shared/dto/message-dto';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [
    MessageLeftComponent,
    MessageRightComponent,
    FormsModule,
    NgIf,
    NgFor,
  ],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css',
})
export class ChatbotComponent {
  userMessage: string = '';
  messages: MessageDTO[] = [];

  constructor(
    private chatbotService: ChatbotService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  sendMessage(): void {
    if (!this.userMessage.trim()) {
      return;
    }

    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    this.messages.push({
      sender: 'Você',
      time: currentTime,
      message: this.userMessage,
    });

    this.chatbotService.sendMessage(this.userMessage).subscribe({
      next: (response) => {
        const formattedMessage = this.formatMessage(response.message);
        this.messages.push({
          sender: 'EcoHero',
          time: currentTime,
          message: formattedMessage,
        });

        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao enviar a mensagem:', err);
      },
    });
    this.userMessage = '';
  }

  formatMessage(message: string): string {
    let formattedMessage = message;

    formattedMessage = formattedMessage.replace(
      /(\* [A-Za-z]+ \:)/g,
      '<span style="font-weight: bold; color: #0000FF;">$1</span>'
    );

    formattedMessage = formattedMessage.replace(
      /\*\*([A-Za-z]+)\*\*/g,
      '<span style="font-weight: bold; color: #FF0000;">$1</span>'
    );
    return formattedMessage;
  }
}
