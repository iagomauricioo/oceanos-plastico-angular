import { ChangeDetectorRef, Component } from '@angular/core';
import { MessageLeftComponent } from './message-left/message-left.component';
import { MessageRightComponent } from './message-right/message-right.component';
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
  host: {
    ngSkipHydration: 'true'
  }
})
export class ChatbotComponent {
  userMessage: string = '';
  messages: MessageDTO[] = [];
  isTyping: boolean = false;

  constructor(
    private chatbotService: ChatbotService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void { }

  sendMessage(): void {
    if (!this.userMessage?.trim() || this.isTyping) {
      return;
    }

    const messageToSend = this.userMessage.trim();
    this.userMessage = '';

    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    this.messages.push({
      sender: 'Você',
      time: currentTime,
      message: messageToSend
    });

    this.isTyping = true;
    this.cdr.detectChanges();

    this.chatbotService.sendMessage(messageToSend).subscribe({
      next: (response) => {
        this.messages.push({
          sender: 'EcoHero',
          time: currentTime,
          message: response.message,
        });
        this.isTyping = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao enviar a mensagem:', err);
        this.messages.push({
          sender: 'EcoHero',
          time: currentTime,
          message: 'Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.',
        });
        this.isTyping = false;
        this.cdr.detectChanges();
      }
    });
  }
}
