import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExternalLoginAPI } from '../config/APILinks';
import { ExternalLogin } from '../models/externalLogin';
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(private http: HttpClient) { }
    TakeToken(user: ExternalLogin){
        return this.http.post(ExternalLoginAPI.GetToken, user);
    }
}