import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwayRoutingModule } from './away-routing.module';
import { AwayComponent } from './away.component';


@NgModule({
  declarations: [AwayComponent],
  imports: [
    CommonModule,
    AwayRoutingModule
  ]
})
export class AwayModule { }
