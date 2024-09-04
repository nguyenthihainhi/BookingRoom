import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/components/modal/shared.module';
import { StaffRoutingModule } from './staff-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, SharedModule, StaffRoutingModule
  ]
})
export class StaffModule { }
