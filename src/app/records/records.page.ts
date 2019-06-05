import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-records',
  templateUrl: './records.page.html',
  styleUrls: ['./records.page.scss'],
})
export class RecordsPage implements OnInit {

  constructor() { }
  viewTitle:any;
  selectedDate:any
  ngOnInit() {
    this.items[0].open = true;
  }
  automaticalClose = true;
  items: any[] = [
    {
      groupName: 'Wellness',
      indicators: [
        {
          indicatorName: 'weight',
          value: '68 kg',

        },
        {
          indicatorName: 'height',
          value: '171 cm',

        },
        {
          indicatorName: 'BMI',
          value: '25',

        },
        {
          indicatorName: 'waist',
          value: '89 cm',

        }
      ]
    },
    {
      groupName: 'Medical',
      indicators: [
        {
          indicatorName: 'HDL',
          value: '4.5 mm/mmol',

        },
        {
          indicatorName: 'BP(sys)',
          value: '110 mm/mmol',

        },
        {
          indicatorName: 'BP(dys)',
          value: '89 mm/mmol',

        },
        {
          indicatorName: 'LDL',
          value: '4.5 mm/mmol',

        }
      ]
    }
  ]

  toggleSection(index) {
    this.items[index].open = !this.items[index].open
    if (this.automaticalClose && this.items[index].open) {


      // this.items.filter((itemIndex)=>{
      //   itemIndex!=index
      // })
      // .map((item)=>{
      //   item.open=false
      // })
      for (let i = 0; i < this.items.length; i++) {
        if (i != index) {
          this.items[i].open = false;
          console.log(this.items[i].open)
        }
      }
    }
  }
  calendar = {
    mode: 'week',
    currentDate: new Date()
  }
  onCurrentDateChanged($event) {

  }
  reloadSource(startTime, endTime) {

  }
  onEventSelected($event) {

  }
  onViewTitleChanged(title) {
    console.log(typeof(title) )
    this.viewTitle = title.split(',')[0];
  }
  onTimeSelected($event) {
    this.selectedDate = new Date($event.selectedTime);
  }
  getCustomClass(someParameter) {
    return 'red';
  }
  getBackgroundColor() {
    return {
      backgroundColor: "blue"
    }

  }
  today() {
    this.calendar.currentDate = new Date();
  }

  
}
