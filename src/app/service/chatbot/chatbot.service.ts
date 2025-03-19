import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  constructor(private http: HttpClient) {}
  sendMessage(question: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      'https://api.oceanosdeplastico.com.br/chatbot/ask',
      {
        question: question,
      }
    );
  }

  getResponse(question: string): Observable<{ message: string }> {
    return this.sendMessage(question);
  }
}
