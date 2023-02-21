import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactMessage } from '../contact-form/models/contact.message.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  constructor(private http: HttpClient) {}

  async postMessage(message: ContactMessage): Promise<Observable<any>> {
    console.log('Message: ', { message });

    const res = await this.http.post<any>(
      'https://personal-website-api-production.up.railway.app/message',
      message,
      httpOptions
    );

    console.log('Service: message ', { res });

    return res;
  }
}
