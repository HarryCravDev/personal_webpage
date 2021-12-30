import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataRequestService } from '../services/data-request.service';

@Component({
  selector: 'app-subscribe-widget',
  templateUrl: './subscribe-widget.component.html',
  styleUrls: ['./subscribe-widget.component.css'],
})
export class SubscribeWidgetComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() inputLabel: string | null = null;
  @Input() inputType: string = 'text';
  @Input() buttonText: string = 'Submit';
  @Input() imageUrl: string = '';
  emailText: string = '';

  constructor(private dataRequest: DataRequestService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.dataRequest.postSubscribe(form.value.email);
    this.emailText = '';
  }
}
