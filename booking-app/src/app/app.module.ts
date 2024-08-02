import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

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
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
   providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}