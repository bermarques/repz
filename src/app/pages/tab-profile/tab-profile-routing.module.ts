import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabProfilePage } from './tab-profile.page';

const routes: Routes = [
  {
    path: '',
    component: TabProfilePage
  },  {
    path: 'statistics',
    loadChildren: () => import('./statistics/statistics.module').then( m => m.StatisticsPageModule)
  },
  {
    path: 'measurements',
    loadChildren: () => import('./measurements/measurements.module').then( m => m.MeasurementsPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabProfilePageRoutingModule {}
