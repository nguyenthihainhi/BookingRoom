import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppHttpClientService } from './app-http-client.service';
import { ILoginRequest } from '../interfaces/account.interface';
import { AuthSlugs } from '../config/api.config';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  constructor(private httpClient: AppHttpClientService) { }


  loginWithFull(data: ILoginRequest): Observable<any> {
    return this.httpClient.post(AuthSlugs.LoginOther, data);
  }
  testLogin(data: any): Observable<any> {
    return this.httpClient.post('https://dummyjson.com/auth/login', data)

  }


  
}
