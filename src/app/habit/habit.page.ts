import { Component, OnInit, ViewChild } from '@angular/core';
import {
  format,
  startOfWeek,
  lastDayOfWeek,
  subDays,
  subWeeks
} from 'date-fns';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.page.html',
  styleUrls: ['./habit.page.scss'],
})
export class HabitPage implements OnInit {

  currentDate: any;
  startDayOfWeek: any;
  lastDayOfWeek: any;
  Sun:any;
  Mon:any;
  Tue:any;
  Wed:any;
  Thu:any;
  Fri:any;
  Sat:any;
  weekDays:any
  constructor() { }

  ngOnInit() {
    this.currentDate = format(new Date(), 'MM/DD/YYYY');
    this.startDayOfWeek = format(startOfWeek(new Date()), 'MM/DD/YYYY');
    this.lastDayOfWeek = format(lastDayOfWeek(new Date()), 'MM/DD/YYYY');
    this.Sat=this.lastDayOfWeek;
    this.Fri=format(new Date(subDays(new Date(this.lastDayOfWeek), 1)), 'MM/DD/YYYY');
    this.Thu=format(new Date(subDays(new Date(this.lastDayOfWeek), 2)), 'MM/DD/YYYY');
    this.Wed=format(new Date(subDays(new Date(this.lastDayOfWeek), 3)), 'MM/DD/YYYY');
    this.Tue=format(new Date(subDays(new Date(this.lastDayOfWeek), 4)), 'MM/DD/YYYY');
    this.Mon=format(new Date(subDays(new Date(this.lastDayOfWeek), 5)), 'MM/DD/YYYY');
    this.Sun=format(new Date(subDays(new Date(this.lastDayOfWeek), 6)), 'MM/DD/YYYY');
  }

  getPreWeek() {
    this.startDayOfWeek = format(new Date(subWeeks(new Date(this.startDayOfWeek), 1)), 'MM/DD/YYYY');
    this.lastDayOfWeek = format(new Date(subWeeks(new Date(this.lastDayOfWeek), 1)), 'MM/DD/YYYY');
    this.Sat=this.lastDayOfWeek;
    this.Fri=format(new Date(subDays(new Date(this.lastDayOfWeek), 1)), 'MM/DD/YYYY');
    this.Thu=format(new Date(subDays(new Date(this.lastDayOfWeek), 2)), 'MM/DD/YYYY');
    this.Wed=format(new Date(subDays(new Date(this.lastDayOfWeek), 3)), 'MM/DD/YYYY');
    this.Tue=format(new Date(subDays(new Date(this.lastDayOfWeek), 4)), 'MM/DD/YYYY');
    this.Mon=format(new Date(subDays(new Date(this.lastDayOfWeek), 5)), 'MM/DD/YYYY');
    this.Sun=format(new Date(subDays(new Date(this.lastDayOfWeek), 6)), 'MM/DD/YYYY');
  }

  getNextWeek() {
    this.startDayOfWeek = format(new Date(subWeeks(new Date(this.startDayOfWeek), -1)), 'MM/DD/YYYY');
    this.lastDayOfWeek = format(new Date(subWeeks(new Date(this.lastDayOfWeek), -1)), 'MM/DD/YYYY');
    this.Sat=this.lastDayOfWeek;
    this.Fri=format(new Date(subDays(new Date(this.lastDayOfWeek), 1)), 'MM/DD/YYYY');
    this.Thu=format(new Date(subDays(new Date(this.lastDayOfWeek), 2)), 'MM/DD/YYYY');
    this.Wed=format(new Date(subDays(new Date(this.lastDayOfWeek), 3)), 'MM/DD/YYYY');
    this.Tue=format(new Date(subDays(new Date(this.lastDayOfWeek), 4)), 'MM/DD/YYYY');
    this.Mon=format(new Date(subDays(new Date(this.lastDayOfWeek), 5)), 'MM/DD/YYYY');
    this.Sun=format(new Date(subDays(new Date(this.lastDayOfWeek), 6)), 'MM/DD/YYYY');
  }
  setDaysOfWeek(currentDate){
    let week={
      Sun:'',

    }
  }
}
