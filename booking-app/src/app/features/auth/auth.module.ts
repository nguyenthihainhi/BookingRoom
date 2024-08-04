import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { OtherLoginComponent } from './other-login/other-login.component';



@NgModule({
  declarations: [LoginComponent, OtherLoginComponent],
  imports: [
    SharedModule, AuthRoutingModule
  ],
  exports: [LoginComponent]
})
export class AuthModule { }
