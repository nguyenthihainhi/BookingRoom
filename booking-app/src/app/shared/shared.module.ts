import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/core/button/button.component';
import { SvgIconComponent } from './components/core/svg-icon/svg-icon.component';
import { HeaderComponent } from './components/header/header.component';
//PrimeUI
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './components/menu/menu.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';
@NgModule({
  declarations: [ButtonComponent, SvgIconComponent, HeaderComponent, MenuComponent],
  imports: [
    CommonModule, FormsModule, ButtonModule, PanelMenuModule, BadgeModule, RippleModule,TagModule, ReactiveFormsModule
  ],
  exports: [
    CommonModule, FormsModule, ButtonComponent, SvgIconComponent, HeaderComponent, MenuComponent, ReactiveFormsModule
  ]
})
export class SharedModule { }
