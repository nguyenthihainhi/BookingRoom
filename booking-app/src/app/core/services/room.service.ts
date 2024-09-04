import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../models/room';
import { RoomAPI } from '../config/APILinks';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  rooms: Room[] = [
    {
        roomId: 1,
        roomName: 'Conference Room Alpha',
        roomImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCoxUHTgBf0kxUm_KUf-VQRKc23TfUTcsakQ&s',
        status: 'Vacancy'
      },
      {
        roomId: 2,
        roomName: 'Meeting Room Beta',
        roomImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCoxUHTgBf0kxUm_KUf-VQRKc23TfUTcsakQ&s',
        status: 'Available'
      },
      {
        roomId: 3,
        roomName: 'Breakout Room Gamma',
        roomImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCoxUHTgBf0kxUm_KUf-VQRKc23TfUTcsakQ&s',
        status: 'Vacancy'
      },
      {
        roomId: 4,
        roomName: 'Workshop Room Delta',
        roomImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCoxUHTgBf0kxUm_KUf-VQRKc23TfUTcsakQ&s',
        status: 'Available'
      }
  ];

  constructor(private http: HttpClient) { }
  getRooms(){
    return this.rooms;
    // return this.http.get<Room[]>(RoomAPI.GetRooms);
  }
}
