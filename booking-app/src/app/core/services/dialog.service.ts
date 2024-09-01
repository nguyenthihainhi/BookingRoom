import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  private toggleSubject = new BehaviorSubject<boolean>(false);

  toggle$ = this.toggleSubject.asObservable();

  updateDialog(){
    // console.log("service line 16:",this.toggleSubject);
    this.toggleSubject.next(!this.toggleSubject.value);
  }
  
}
