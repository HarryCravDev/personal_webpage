import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  indexTitle: number = 0;
  indexPara: number = 0;
  speed: number = 130;
  titleTemplate: string = 'Hello there';
  title: string = '';
  paraTemplate: string =
    'I am a Full Stack Developer with a huge passion for all things tech';
  para: string = '';

  constructor() {}

  ngOnInit(): void {
    this.startTypeWriter();
  }

  startTypeWriter() {
    const titleInterval = setInterval(() => {
      if (this.title.length === this.titleTemplate.length) {
        clearInterval(titleInterval);
      }
      this.typeWriter('title');
    }, this.speed);

    const paraInterval = setInterval(() => {
      if (this.para.length === this.paraTemplate.length) {
        clearInterval(paraInterval);
      }
      this.typeWriter('para');
    }, 80);
  }

  typeWriter(type: string) {
    if (type === 'title') {
      if (this.indexTitle < this.titleTemplate.length) {
        this.title += this.titleTemplate.charAt(this.indexTitle);
        this.indexTitle++;
      }
    }

    if (type === 'para') {
      if (this.indexPara < this.paraTemplate.length) {
        this.para += this.paraTemplate.charAt(this.indexPara);
        this.indexPara++;
      }
    }
  }
}
