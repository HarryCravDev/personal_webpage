import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../models/experience.model';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css'],
})
export class ExperienceCardComponent implements OnInit {
  @Input() experience: Experience | undefined;

  constructor() {}

  ngOnInit(): void {}
}
