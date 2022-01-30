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
export class DataRequestService {
  constructor(private http: HttpClient) {}

  async getExerienceData(): Promise<Observable<any>> {
    const res = await this.http.get('https://personal-webpage-backend-42850.herokuapp.com/api/v1/experience');

    console.log('Service: ', res);

    return res;
  }

  async postMessage(message: ContactMessage): Promise<Observable<any>> {
    const res = await this.http.post<any>(
      'https://personal-webpage-backend-42850.herokuapp.com/message',
      message,
      httpOptions
    );

    return res;
  }

  async postSubscribe(email: string) {
    const res = await this.http.post<any>(
      'https://personal-webpage-backend-42850.herokuapp.com/subscribe',
      { email },
      httpOptions
    );

    res.subscribe((e) => console.log('postSubscribe :::: ', e));

    console.log('Service email: ', res);
  }
}
