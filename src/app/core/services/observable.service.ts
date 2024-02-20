import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  private screenAuth = new Subject<number>();
  public screenAuth$ = this.screenAuth.asObservable();

  setScreenAuth(screenNumber: number): void {
    this.screenAuth.next(screenNumber);
  }

}
