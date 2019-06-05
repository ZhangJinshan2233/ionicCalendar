import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {NgCalendarModule} from 'ionic2-calendar'
import { RecordsPage } from './records.page';
import { ShareModule } from "../share/share.module";
const routes: Routes = [
  {
    path: '',
    component: RecordsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    NgCalendarModule,
    RouterModule.forChild(routes),
   
  ],
  declarations: [RecordsPage]
})
export class RecordsPageModule {}
