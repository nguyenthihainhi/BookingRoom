import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/components/modal/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { StoreModule } from '@ngrx/store';
import { adminsFeature } from './store/admin.feature';
import { EffectsModule } from '@ngrx/effects';
import * as adminEffects from './store/admin.effects';
@NgModule({
  declarations: [ManageUserComponent],
  imports: [
     SharedModule, AdminRoutingModule, StoreModule.forFeature(adminsFeature), 
     EffectsModule.forFeature(adminEffects)
  ]
})
export class AdminModule { }
