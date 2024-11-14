import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MatExpansionModule } from '@angular/material/expansion';
import { Workout } from 'src/app/models/workout';
import { CommonModule } from '@angular/common';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'app-workout-routine',
  templateUrl: './workout-routine.component.html',
  styleUrls: ['./workout-routine.component.scss'],
  standalone: true,
  imports: [IonicModule, MatExpansionModule, CommonModule],
})
export class WorkoutRoutineComponent implements OnInit {
  @Input() items: Workout[] = [];
  constructor() {}

  ngOnInit() {}
}
