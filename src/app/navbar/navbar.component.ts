import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() expandMenu = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onExpandMenu() {
    this.expandMenu.emit();
  }
}
