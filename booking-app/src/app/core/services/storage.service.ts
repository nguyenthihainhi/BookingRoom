import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  prefix = 'comc_';
  localStorage: Storage;
  constructor() {
    this.localStorage = window.localStorage
  }


  public set(key: string, data: string) {
    this.localStorage.setItem(this.generateKey(key), data);
  }

  public get(key: string) {
    return this.localStorage.getItem(this.generateKey(key));
  }

  public setSession(key: string, data: string) {
    sessionStorage.setItem(this.generateKey(key), data);
  }

  public getSession(key: string) {
    return sessionStorage.getItem(this.generateKey(key));
  }

  public unset(key: string) {
    this.localStorage.removeItem(this.generateKey(key));
  }

  private generateKey(key: string) {
    return this.prefix + '_' + key;
  }
}
