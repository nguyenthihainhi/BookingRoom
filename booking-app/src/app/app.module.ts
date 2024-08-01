import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarHeaderComponent } from './nav/nav-bar-header/nav-bar-header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavBarHeaderComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterOutlet, 
    HttpClientModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {enableTracing: true}), 
    ButtonModule,
    HttpClientModule,
    ToastModule,
    MenubarModule,
    BrowserAnimationsModule,
    DropdownModule,
    
  ],
   providers: [],
   exports: [
    ToastModule,
    MenubarModule,
   ],
  bootstrap: [AppComponent],
})
export class AppModule {}