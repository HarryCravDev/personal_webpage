import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  index: number = 0;
  speed: number = 140;
  titleTemplate: string = 'Hello there';
  title: string = '';

  constructor() {}

  ngOnInit(): void {
    this.startTypeWriter();
  }

  startTypeWriter() {
    const foo = setInterval(() => {
      if (this.title.length === this.titleTemplate.length) {
        clearInterval(foo);
      }
      this.typeWriter();
    }, this.speed);
  }

  typeWriter(type?: string) {
    if (this.index < this.titleTemplate.length) {
      console.log('Type...');
      this.title += this.titleTemplate.charAt(this.index);
      this.index++;
    }
  }
}
