import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { OtherLoginComponent } from './other-login/other-login.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, OtherLoginComponent],
  imports: [
    SharedModule, 
    AuthRoutingModule,
  ],
  exports: [LoginComponent],
  
})
export class AuthModule { }
