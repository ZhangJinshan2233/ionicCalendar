import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.page.html',
  styleUrls: ['./indicator.page.scss'],
})
export class IndicatorPage implements OnInit {
@Input('indicator') indicator:any
  constructor() { }

  ngOnInit() {
    
  }

}
