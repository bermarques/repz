import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabWorkoutsPageRoutingModule } from './tab-workouts-routing.module';

import { TabWorkoutsPage } from './tab-workouts.page';
import { HeaderComponent } from '../../components/header/header.component';
import { WorkoutRoutineComponent } from '../../components/workout-routine/workout-routine.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabWorkoutsPageRoutingModule,
    HeaderComponent,
    WorkoutRoutineComponent,
  ],
  declarations: [TabWorkoutsPage],
})
export class TabWorkoutsPageModule {}
