import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageBuildingComponent } from './manage-building/manage-building.component';
import { BuildingDetailComponent } from './manage-building/building-detail/building-detail.component';



@NgModule({
  declarations: [ManageUserComponent, ManageBuildingComponent, BuildingDetailComponent],
  imports: [
    CommonModule, SharedModule, AdminRoutingModule
  ]
})
export class AdminModule { }
