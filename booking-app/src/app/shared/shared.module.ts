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
import { PanelMenuModule } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TabViewModule } from 'primeng/tabview';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';

// Component
import { MenuComponent } from './components/menu/menu.component';
import { GoogleSigninComponent } from './components/core/google-signin/google-signin.component';
import { AnonymousComponent } from './components/anonymous/anonymous.component';
import { BreadcrumbComponent } from './components/core/breadcrumb/breadcrumb.component';
import { InfoUserFormComponent } from './components/modal/info-user-form/info-user-form.component';
import { TabViewComponent } from './components/core/tab-view/tab-view.component';
import { SelectButtonComponent } from './components/core/select-button/select-button.component';
import { TableComponent } from './components/core/table/table.component';
import { MultiSelectComponent } from './components/core/multi-select/multi-select.component';
import { DialogComponent } from './components/core/dialog/dialog.component';
import { AddUserComponent } from './components/modal/add-user/add-user.component';
import { UpdateUserComponent } from './components/modal/update-user/update-user.component';
import { ConfirmDialogComponent } from './components/core/confirm-dialog/confirm-dialog.component';
import { BuildingCardComponent } from './components/core/card/building-card/building-card.component';
import { BuildingDialogComponent } from './components/core/building-dialog/building-dialog.component';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
// import { BuildingDialogComponent } from './components/core/dialog/building-dialog/building-dialog.component ';
@NgModule({
  declarations: [ButtonComponent, SvgIconComponent, HeaderComponent, MenuComponent, AnonymousComponent, BreadcrumbComponent, InfoUserFormComponent, TabViewComponent, SelectButtonComponent, TableComponent, MultiSelectComponent, DialogComponent, AddUserComponent, UpdateUserComponent
    , ConfirmDialogComponent, GoogleSigninComponent, BuildingCardComponent, BuildingDialogComponent, MainLayoutComponent ],
  imports: [
    CommonModule, FormsModule, ButtonModule, PanelMenuModule, BadgeModule, RippleModule, TagModule, BreadcrumbModule, TabViewModule, SelectButtonModule, TableModule, MultiSelectModule, DialogModule, ToastModule, DynamicDialogModule, ConfirmDialogModule, DropdownModule, ToggleButtonModule,
    ReactiveFormsModule, EditorModule, InputTextModule, FloatLabelModule, InputNumberModule, 
  ],
  exports: [
    CommonModule, FormsModule, ReactiveFormsModule, TableModule, ButtonModule, TagModule, ToastModule, TooltipModule, MultiSelectModule, TabViewModule, DropdownModule, DynamicDialogModule, ToggleButtonModule, EditorModule, InputTextModule, FloatLabelModule, InputNumberModule,
    ButtonComponent, SvgIconComponent, HeaderComponent, MenuComponent , AnonymousComponent, BreadcrumbComponent, InfoUserFormComponent, TabViewComponent, SelectButtonComponent, TableComponent, MultiSelectComponent, DialogComponent, AddUserComponent, UpdateUserComponent,ConfirmDialogComponent,
    GoogleSigninComponent, BuildingCardComponent, BuildingDialogComponent
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
