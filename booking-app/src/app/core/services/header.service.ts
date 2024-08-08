import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private eventSubject = new Subject<any>();
  event$ = this.eventSubject.asObservable();

  constructor() { }

  emitEventHumberger(data: boolean) {
    this.eventSubject.next(data);
  }
}
