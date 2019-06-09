import { Component, OnInit, ViewChild } from '@angular/core';
import {
  format,
  startOfWeek,
  lastDayOfWeek,
  subWeeks,
  subMonths,
  subYears
} from 'date-fns';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-time-difference',
  templateUrl: './time-difference.page.html',
  styleUrls: ['./time-difference.page.scss'],
})
export class TimeDifferencePage implements OnInit {
  currentDate: any;
  startDayOfWeek: any;
  lastDayOfWeek: any;
  currentMonth: any;
  currentYear: any;
  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;
  constructor() { }

  ngOnInit() {
    this.currentDate = format(new Date(), 'MM/DD/YYYY');
    this.startDayOfWeek = format(startOfWeek(new Date()), 'MM/DD/YYYY');
    this.lastDayOfWeek = format(lastDayOfWeek(new Date()), 'MM/DD/YYYY');
    this.currentMonth = format(new Date(), 'MM/DD/YYYY');
    this.currentYear = format(new Date(), 'MM/DD/YYYY');
    this.lineChartMethod();
  }

  getPreWeek() {
    this.startDayOfWeek = format(new Date(subWeeks(new Date(this.startDayOfWeek), 1)), 'MM/DD/YYYY');
    this.lastDayOfWeek = format(new Date(subWeeks(new Date(this.lastDayOfWeek), 1)), 'MM/DD/YYYY');
  }

  getNextWeek() {
    this.startDayOfWeek = format(new Date(subWeeks(new Date(this.startDayOfWeek), -1)), 'MM/DD/YYYY');
    this.lastDayOfWeek = format(new Date(subWeeks(new Date(this.lastDayOfWeek), -1)), 'MM/DD/YYYY');
  }

  getPreMonth() {
    this.currentMonth = format(new Date(subMonths(new Date(this.currentMonth), 1)), 'MM/DD/YYYY');
  }
  getNextMonth() {
    this.currentMonth = format(new Date(subMonths(new Date(this.currentMonth), -1)), 'MM/DD/YYYY')
  }

  getPreYear() {
this.currentYear=format(new Date(subYears(new Date(this.currentYear), 1)), 'MM/DD/YYYY');
  }
  getNextYear() {
    this.currentYear=format(new Date(subYears(new Date(this.currentYear), -1)), 'MM/DD/YYYY');
  }

  getWeeksOfMonth(year,month){

  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
        labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        datasets: [
          {
            label: 'Sell per week',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15,23,23,45,78,54,56,45,45,34,76,89,23,22,12,23,45,67,78],
            spanGaps: false,
          }
        ]
      }
    });
  }
}
