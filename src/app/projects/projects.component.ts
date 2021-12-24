import { Component, OnInit } from '@angular/core';
import { Project } from './models/project.model';
import { projectsData } from './models/project.test.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = projectsData;

  constructor() {}

  ngOnInit(): void {}
}
