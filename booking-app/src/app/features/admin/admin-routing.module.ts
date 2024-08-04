import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManageUserComponent } from "./manage-user/manage-user.component";


const routes: Routes = [
  {path: 'manage-user', component: ManageUserComponent, title: 'Quản lý người dùng'}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class AdminRoutingModule {

}