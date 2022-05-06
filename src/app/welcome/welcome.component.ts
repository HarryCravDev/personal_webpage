import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  indexTitle: number = 0;
  indexPara: number = 0;
  // speed: number = 130;
  speed: number = 400;
  titleTemplate: string = 'Hello there';
  title: string = '';
  paraTemplate: string =
    'I am a Full Stack Developer with a huge passion for all things tech';
  para: string = '';
  // titles: string[] = [" a", " b", " c", " d"];
  titles: string[] = ["Welcome", "Willkommen", "Benvenguts", "환영합니다", "いらっしゃいませ", "Bienvenue", "приветствовать", "歡迎光臨"];
  titlesLength: number = this.titles.length;
  titleCounter: number = 0;
  foo: any = null;

  constructor() {}

  ngOnInit(): void {
    this.startTypeWriter();
  }

  restartstartTypeWriter() {
    this.startTypeWriter();
  }

  startTypeWriter() {
    debugger;
    // const titleInterval = setInterval((): void => {
    this.foo = setInterval((): any => {

      if (this.title.length === this.titles[this.titleCounter].length) {

        if(this.titleCounter === (this.titles.length - 1)){
          this.titleCounter = 0;
          clearInterval(this.foo);
          return this.removeTypeWriter();
          // return clearInterval(this.foo);
        }

        this.titleCounter++;
        // this.title = "";
        // this.indexTitle = 0;
        clearInterval(this.foo);
        // this.restartstartTypeWriter();
        this.removeTypeWriter();
      }

      this.typeWriter('title', this.titleCounter);
    }, this.speed);

    const paraInterval = setInterval(() => {
      if (this.para.length === this.paraTemplate.length) {
        clearInterval(paraInterval);
      }
      this.typeWriter('para');
    }, 80);

  }

  removeTypeWriter() {
    debugger;
    this.foo = setInterval((): any => {

      // ! - end interval
      if(this.title.length === 0){
        clearInterval(this.foo);
        this.startTypeWriter();
      }


      this.a(this.titleCounter);

    }, 110);

  }

  a(index: number){
    if(this.title.length !== 0){
      this.title = this.title.slice(0, -1);
      this.indexTitle--;
    }
  }

  typeWriter(type: string, index?: number) {
    if (type === 'title') {
      if (this.indexTitle < this.titles[index!].length) {
        this.title += this.titles[index!].charAt(this.indexTitle);
        // this.title += this.titleTemplate.charAt(this.indexTitle);
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
