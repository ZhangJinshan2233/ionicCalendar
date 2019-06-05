import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorPage } from "../indicator/indicator.page";
@NgModule({
  declarations: [IndicatorPage],
  imports: [
    CommonModule
  ],
  exports:[IndicatorPage],
 schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class ShareModule { }
