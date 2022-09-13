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
  messageFailure: boolean = false;
  emailText: string = '';
  subjectText: string = '';
  textAreaText: string = '';
  errorMessage: string = '';
  loading: boolean = false;
  formRequestInterval: any;

  constructor(private contactFormService: ContactFormService) {}

  ngOnInit(): void {}

  async onSubmit(form: NgForm) {
    this.loading = true;
    const res = await this.contactFormService.postMessage(form.value);

    res.subscribe(
      (message) => {
        this.formRequestInterval = setInterval(() => {
          this.messageSuccess = false;
          clearInterval(this.formRequestInterval);
        }, 3000);

        // Show text alert informing message was corrently send
        this.messageSuccess = true;
        this.loading = false;
        this.clearInputFields();
      },
      (err) => {
        this.formRequestInterval = setInterval(() => {
          this.messageFailure = false;
          clearInterval(this.formRequestInterval);
          console.log('Error Message: ', err);
        }, 3000);

        // Show text alert informing message was corrently send
        this.errorMessage = err.message;
        this.messageFailure = true;
        this.loading = false;
      }
    );
  }

  clearInputFields() {
    this.emailText = '';
    this.subjectText = '';
    this.textAreaText = '';
  }
}
