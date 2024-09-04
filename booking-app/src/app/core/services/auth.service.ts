import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginRequest } from '../config/account.config';
import { Observable } from 'rxjs';
import { AppHttpClientService } from './app-http-client.service';
import { ApiSlugs } from '../utils/constant';
import { ApiType } from '../config/api.config';
import { getSlug } from '../utils/helper';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly APITYPE: ApiType = 'auth';
  readonly LOGINOTHER = 'LoginOther';
  
  constructor(private httpClient: AppHttpClientService) { }


  loginWithFull(data: ILoginRequest): Observable<any> {
    return this.httpClient.post(getSlug(this.APITYPE, this.LOGINOTHER), data);
  }
  testLogin(data: any): Observable<any> {
    return this.httpClient.post('https://dummyjson.com/auth/login', data)

  }


  
}
