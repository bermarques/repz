import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabHomePageRoutingModule } from './tab-home-routing.module';

import { TabHomePage } from './tab-home.page';
import { HeaderComponent } from '../../components/header/header.component';
import { WorkoutSummaryComponent } from 'src/app/components/workout-summary/workout-summary.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabHomePageRoutingModule,
    HeaderComponent,
    WorkoutSummaryComponent,
  ],
  declarations: [TabHomePage],
})
export class TabHomePageModule {}
