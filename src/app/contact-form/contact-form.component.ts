import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactFormService } from '../services/contact-form.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  messageSuccess: boolean = false;
  emailText: string = '';
  subjectText: string = '';
  textAreaText: string = '';
  successInterval: any;

  constructor(private contactFormService: ContactFormService) {}

  ngOnInit(): void {}

  async onSubmit(form: NgForm) {
    const res = await this.contactFormService.postMessage(form.value);

    res.subscribe((message) => {
      this.successInterval = setInterval(() => {
        this.messageSuccess = false;
        clearInterval(this.successInterval);
      }, 3000);

      // Show text alert informing message was corrently send
      this.messageSuccess = true;
    });

    this.clearInputFields();
  }

  clearInputFields() {
    this.emailText = '';
    this.subjectText = '';
    this.textAreaText = '';
  }
}
