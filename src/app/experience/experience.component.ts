import { Component, OnDestroy, OnInit } from '@angular/core';
import { Experience } from './models/experience.model';
import { experience } from './models/experience.data';
import { DataRequestService } from '../services/data-request.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit, OnDestroy {
  // experience: Experience[] = [];
  experience: Experience[] = experience;
  experienceSubscription: Subscription | undefined;

  constructor(private dataRequest: DataRequestService) {}

  // async ngOnInit(): void {
  async ngOnInit(): Promise<void> {
    // const res = await this.dataRequest.getExerienceData();

    // this.experienceSubscription = res.subscribe((experience) => {
    //   if (experience.success) {
    //     this.experience = experience.experience;
    //   }
    // });
  }

  ngOnDestroy(): void {
    // this.experienceSubscription?.unsubscribe();
  }
}
