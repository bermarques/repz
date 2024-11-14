import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonAvatar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-workout-summary',
  templateUrl: './workout-summary.component.html',
  styleUrls: ['./workout-summary.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class WorkoutSummaryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
