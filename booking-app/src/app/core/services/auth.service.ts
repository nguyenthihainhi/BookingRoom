import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginRequest } from '../config/account.config';
import { Observable } from 'rxjs';
import { AppHttpClientService } from './app-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: AppHttpClientService) { }


  loginWithFull(data: ILoginRequest): Observable<any> {
    return this.httpClient.post('/auth/login', data);
  }

  
}
