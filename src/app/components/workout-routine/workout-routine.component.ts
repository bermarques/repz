import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-workout-routine',
  templateUrl: './workout-routine.component.html',
  styleUrls: ['./workout-routine.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class WorkoutRoutineComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
