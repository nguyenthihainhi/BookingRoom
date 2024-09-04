import { Injectable } from '@angular/core';
import { AppHttpClientService } from './app-http-client.service';
import { getSlug } from '../utils/helper';
import { AdminSlugs, ApiType, BaseResponseRecords } from '../config/api.config';
import { IDummy } from '../config';
import { Observable } from 'rxjs';
import { User } from '../../features/admin/store/admin.states';


//test interface

//test interface
@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly APITYPE: ApiType = 'admin';
  constructor(private httpClient: AppHttpClientService) { }


  getUsers(
  ): Observable<BaseResponseRecords<User>> {

    return this.httpClient.get<BaseResponseRecords<User>>(
      // getSlug(this.APITYPE, AdminSlugs.LoadUser),
      'https://dummyjson.com/c/5b3d-75b4-47e0-8c73')
  }


  filterUsers(
    search: string = '',
    orderBy: string = '',
    orderByDesc: boolean = false,
    thenBy: string = '',
    thenByDesc: boolean = false
  ) {
    const params: IDummy = {
      Search: search,
      OrderBy: orderBy,
      OrderByDesc: orderByDesc,
      ThenBy: thenBy,
      ThenByDesc: thenByDesc
    }

    //filter paramter default
    const filterParams = Object.fromEntries(
      Object.entries(params).filter(([key, value]) => value !== '' && value !== false)
    )

    return this.httpClient.get<BaseResponseRecords<User>>(
      // getSlug(this.APITYPE, AdminSlugs.LoadUser),
      'https://dummyjson.com/c/5b3d-75b4-47e0-8c73', filterParams)
  }

  getPagedUsers(
    pageSize: number,
    pageIndex: number
  ): Observable<BaseResponseRecords<User>> {
   
    //select tới filter nếu có thì thêm vào param 
    //vì chuyển trang có thể 2 hướng: 1 có filter r, 2 chưa filter

    const params: IDummy = {
      PageSize: pageSize,
      PageIndex: pageIndex
    };
    return this.httpClient.get<BaseResponseRecords<User>>(
      'https://dummyjson.com/c/5b3d-75b4-47e0-8c73',
      { params }
    )
  }

}
