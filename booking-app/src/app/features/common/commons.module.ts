import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsRoutingModule } from './commons-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, SharedModule,CommonsRoutingModule
  ]
})
export class CommonsModule { }
