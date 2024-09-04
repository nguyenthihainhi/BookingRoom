import { NgModule} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule, routes } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MainLayoutComponent } from './shared/components/layout/main-layout/main-layout.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    AppComponent, 
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterOutlet,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ConfirmDialogModule,
    // SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
],
   providers: [
    provideHttpClient(withFetch()),

    //primeng provider
    MessageService,
    ConfirmationService,
   ],
  bootstrap: [AppComponent],
})
export class AppModule {}