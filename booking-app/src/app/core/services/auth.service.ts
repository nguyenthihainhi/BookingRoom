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
  static apiType: ApiType = 'auth';
  constructor(private httpClient: AppHttpClientService) { }


  loginWithFull(data: ILoginRequest): Observable<any> {
    return this.httpClient.post(getSlug(AuthService.apiType, 'LoginOther'), data);
  }

  
}
