import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManageUserComponent } from "./manage-user/manage-user.component";
import { AnonymousComponent } from "../../shared/components/anonymous/anonymous.component";
import { ROUTERADMIN } from "../../core/utils/constant";
import { ManageBuildingComponent } from "./manage-building/manage-building.component";
import { BuildingDetailComponent } from "./manage-building/building-detail/building-detail.component";
// import { BuildingDetailComponent } from "./manage-building/building-detail/building-detail.component";


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dashboard', component: AnonymousComponent, title: 'Trang Điều khiển', data: { breadcrumb: ROUTERADMIN['dashboard'] } },
      { path: 'dashboard/manage-user', component: ManageUserComponent, title: 'Quản lý người dùng', data: { breadcrumb: ROUTERADMIN['dashboard/manage-user'] } },
      { path: 'dashboard/manage-role', component: AnonymousComponent, title: 'Quản lý vai trò', data: { breadcrumb: ROUTERADMIN['dashboard/manage-role'] } },
      { path: 'dashboard/manage-build', component: ManageBuildingComponent, title: 'Quản lý tòa nhà', data: { breadcrumb: ROUTERADMIN['dashboard/manage-build'] } },
      { path: 'dashboard/manage-build/:id', component: BuildingDetailComponent, title: 'Quản lý phòng', data: { breadcrumb: ROUTERADMIN['dashboard/manage-build'] } },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {

}