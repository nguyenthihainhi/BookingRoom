import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/core/button/button.component';
import { SvgIconComponent } from './components/core/svg-icon/svg-icon.component';
import { HeaderComponent } from './components/header/header.component';
//SocialLogin
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
//PrimeUI
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './components/menu/menu.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';
import { GoogleSigninComponent } from './components/core/google-signin/google-signin.component';
@NgModule({
  declarations: [ButtonComponent, SvgIconComponent, HeaderComponent, MenuComponent, GoogleSigninComponent],
  imports: [
    CommonModule, FormsModule, ButtonModule, PanelMenuModule, BadgeModule, RippleModule,TagModule, ReactiveFormsModule
  ],
  exports: [
    CommonModule, FormsModule, ButtonComponent, SvgIconComponent, HeaderComponent, MenuComponent, ReactiveFormsModule, GoogleSigninComponent
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '340351071914-5t0m80o6qnf7a8q7ad66482blh4gc0e9.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
})
export class SharedModule { }
