import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { OtherLoginComponent } from "./other-login/other-login.component";


const routes: Routes = [
    { path: 'login-student', component: LoginComponent, title: 'đăng nhập | FPTU' },
    { path: 'login-other', component: OtherLoginComponent, title: 'đăng nhâp & quản lý | FPTU' },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class AuthRoutingModule {

}