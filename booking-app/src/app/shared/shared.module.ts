import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/core/button/button.component';
import { SvgIconComponent } from './components/core/svg-icon/svg-icon.component';
import { HeaderComponent } from './components/header/header.component';
import { AnonymousComponent } from './components/anonymous/anonymous.component';
import { BreadcrumbComponent } from './components/core/breadcrumb/breadcrumb.component';
import { InfoUserFormComponent } from './components/info-user-form/info-user-form.component';
import { TabViewComponent } from './components/core/tab-view/tab-view.component';
import { SelectButtonComponent } from './components/core/select-button/select-button.component';
import { TableComponent } from './components/core/table/table.component';
//PrimeUI
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './components/menu/menu.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TabViewModule } from 'primeng/tabview';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [ButtonComponent, SvgIconComponent, HeaderComponent, MenuComponent, AnonymousComponent, BreadcrumbComponent, InfoUserFormComponent, TabViewComponent, SelectButtonComponent, TableComponent],
  imports: [
    CommonModule, FormsModule, ButtonModule, PanelMenuModule, BadgeModule, RippleModule,TagModule, BreadcrumbModule, TabViewModule, SelectButtonModule, TableModule,
    ReactiveFormsModule, 
  ],
  exports: [
    CommonModule, FormsModule, ReactiveFormsModule, TableModule,ButtonModule,
    ButtonComponent, SvgIconComponent, HeaderComponent, MenuComponent , AnonymousComponent, BreadcrumbComponent, InfoUserFormComponent, TabViewComponent, SelectButtonComponent, TableComponent
  ]
})
export class SharedModule { }
