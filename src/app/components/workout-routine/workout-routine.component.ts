import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-workout-routine',
  templateUrl: './workout-routine.component.html',
  styleUrls: ['./workout-routine.component.scss'],
  standalone: true,
  imports: [IonicModule, MatExpansionModule],
})
export class WorkoutRoutineComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
