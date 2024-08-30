import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../core/button/button.component';
import { SvgIconComponent } from '../core/svg-icon/svg-icon.component';
import { HeaderComponent } from '../header/header.component';
import { AnonymousComponent } from '../anonymous/anonymous.component';
import { BreadcrumbComponent } from '../core/breadcrumb/breadcrumb.component';
import { InfoUserFormComponent } from '../modal/info-user-form/info-user-form.component';
import { TabViewComponent } from '../core/tab-view/tab-view.component';
import { SelectButtonComponent } from '../core/select-button/select-button.component';
import { TableComponent } from '../core/table/table.component';
import { MenuComponent } from '../menu/menu.component';
import { MultiSelectComponent } from '../core/multi-select/multi-select.component';
import { DialogComponent } from '../core/dialog/dialog.component';
import { ConfirmDialogComponent } from '../core/confirm-dialog/confirm-dialog.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

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
@NgModule({
  declarations: [ButtonComponent, SvgIconComponent, HeaderComponent, MenuComponent, AnonymousComponent, BreadcrumbComponent, InfoUserFormComponent, TabViewComponent, SelectButtonComponent, TableComponent, MultiSelectComponent, DialogComponent, AddUserComponent, UpdateUserComponent
    , ConfirmDialogComponent],
  imports: [
    CommonModule, FormsModule, ButtonModule, PanelMenuModule, BadgeModule, RippleModule,TagModule, BreadcrumbModule, TabViewModule, SelectButtonModule, TableModule, MultiSelectModule, DialogModule, ToastModule, DynamicDialogModule, ConfirmDialogModule, DropdownModule, ToggleButtonModule,
    ReactiveFormsModule, 
  ],
  exports: [
    CommonModule, FormsModule, ReactiveFormsModule, TableModule,ButtonModule, ToastModule, TooltipModule, MultiSelectModule, TabViewModule, DropdownModule, DynamicDialogModule, ToggleButtonModule,
    ButtonComponent, SvgIconComponent, HeaderComponent, MenuComponent , AnonymousComponent, BreadcrumbComponent, InfoUserFormComponent, TabViewComponent, SelectButtonComponent, TableComponent, MultiSelectComponent, DialogComponent, AddUserComponent, UpdateUserComponent,ConfirmDialogComponent
  ]
})
export class SharedModule { }
