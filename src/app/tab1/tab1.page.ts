import { Component } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { MonthViewComponent } from 'ionic2-calendar/monthview';
import { WeekViewComponent } from 'ionic2-calendar/weekview';
import { DayViewComponent } from 'ionic2-calendar/dayview';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  eventSource=[]
  calendar={
    mode:'week',
    currentDate:new Date()
  }
  onCurrentDateChanged($event) {

  }
  reloadSource(startTime, endTime) {

  }
  onEventSelected($event) {

  }
  onViewTitleChanged($event) {

  }
  onTimeSelected($event) {
   console.log($event)
  }
  getCustomClass(someParameter) {
    return 'red';
}

}
