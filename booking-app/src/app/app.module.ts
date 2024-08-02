import { NgModule} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule, routes } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterOutlet, 
    HttpClientModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    // SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
   providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
   ],
  bootstrap: [AppComponent],
})
export class AppModule {}