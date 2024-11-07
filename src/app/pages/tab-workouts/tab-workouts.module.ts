import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabWorkoutsPageRoutingModule } from './tab-workouts-routing.module';

import { TabWorkoutsPage } from './tab-workouts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabWorkoutsPageRoutingModule
  ],
  declarations: [TabWorkoutsPage]
})
export class TabWorkoutsPageModule {}
