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
  isTyping: boolean = false;

  constructor(
    private chatbotService: ChatbotService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void { }

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

    this.isTyping = true;

    this.chatbotService.sendMessage(this.userMessage).subscribe({
      next: (response) => {
        this.isTyping = false;
        this.messages.push({
          sender: 'EcoHero',
          time: currentTime,
          message: response.message,
        });

        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao enviar a mensagem:', err);
      },
    });
    this.userMessage = '';
  }
}
