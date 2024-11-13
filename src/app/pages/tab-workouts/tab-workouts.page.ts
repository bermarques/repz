import { Component, OnInit } from '@angular/core';
import { fakeRoutine } from './fake-routine';

@Component({
  selector: 'app-tab-workouts',
  templateUrl: './tab-workouts.page.html',
  styleUrls: ['./tab-workouts.page.scss'],
})
export class TabWorkoutsPage implements OnInit {
  items = fakeRoutine;
  constructor() {}

  ngOnInit() {}
}
