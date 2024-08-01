import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campus } from '../models/campus';
import { CampusAPI } from '../Urls/APILinks';

@Injectable({
  providedIn: 'root'
})
export class CampusService {
  campuses: Campus[] = [
    {
      campusId: 1,
      name: 'FU-Hòa Lạc'
  },
  {
      campusId: 2,
      name: 'FU-Hồ Chí Minh'
  },
  {
      campusId: 3,
      name: 'FU-Đà Nẵng'
  },
  {
      campusId: 4,
      name: 'FU-Cần Thơ'
  },
  {
      campusId: 5,
      name: 'FU-Quy Nhơn'
  }
  ];

  constructor(private http: HttpClient) { }
  getCampuses(){
    return this.campuses;
    // return this.http.get<Campus[]>(CampusAPI.GetCampus);
  }
}
