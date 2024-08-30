import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/components/modal/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [ManageUserComponent],
  imports: [
     SharedModule, AdminRoutingModule
  ]
})
export class AdminModule { }
