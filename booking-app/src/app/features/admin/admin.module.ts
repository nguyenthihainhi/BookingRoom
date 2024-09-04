import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { StoreModule } from '@ngrx/store';
import { adminsFeature } from './store/admin.feature';
import { EffectsModule } from '@ngrx/effects';
import * as adminEffects from './store/admin.effects';
import { ManageBuildingComponent } from './manage-building/manage-building.component';
import { BuildingDetailComponent } from './manage-building/building-detail/building-detail.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [ManageUserComponent, ManageBuildingComponent, BuildingDetailComponent],
  imports: [
    SharedModule,
    AdminRoutingModule, StoreModule.forFeature(adminsFeature), 
     EffectsModule.forFeature(adminEffects)
  ]
})
export class AdminModule { }
