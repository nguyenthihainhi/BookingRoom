import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CommonsRoutingModule } from './commons-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, SharedModule,CommonsRoutingModule
  ]
})
export class CommonsModule { }
