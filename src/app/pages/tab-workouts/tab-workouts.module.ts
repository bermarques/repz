import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabWorkoutsPageRoutingModule } from './tab-workouts-routing.module';

import { TabWorkoutsPage } from './tab-workouts.page';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabWorkoutsPageRoutingModule,
    HeaderComponent,
  ],
  declarations: [TabWorkoutsPage],
})
export class TabWorkoutsPageModule {}
