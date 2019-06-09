import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './records/records.module#RecordsPageModule'  },
  { path: 'time-difference', loadChildren: './time-difference/time-difference.module#TimeDifferencePageModule' },
  { path: 'habit', loadChildren: './habit/habit.module#HabitPageModule' },
  // { path: 'records', loadChildren: './records/records.module#RecordsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
