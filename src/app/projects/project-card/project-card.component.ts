import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project | undefined;
  @Input() index: number = 0;
  mobile: boolean = false;
  constructor() {}

  ngOnInit(): void {
    if (window.screen.width <= 480) { // 768px portrait
      this.mobile = true;
    }
  }
}
