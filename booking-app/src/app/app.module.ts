import { NgModule, isDevMode} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule, routes } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/components/modal/shared.module';
import { MainLayoutComponent } from './shared/components/layout/main-layout/main-layout.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { loggerInterceptor } from './core/interceptors/logger.interceptor';
import { httpRequestInterceptor } from './core/interceptors/http-request.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { responseInterceptor } from './core/interceptors/response.interceptor';

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
    // SharedModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
],
   providers: [
    provideHttpClient(
      withFetch(),   
      withInterceptors([httpRequestInterceptor, loggerInterceptor, errorInterceptor, responseInterceptor]),
    ),

    //primeng provider
    MessageService,
    ConfirmationService, 
   ],
  bootstrap: [AppComponent],
})
export class AppModule {}