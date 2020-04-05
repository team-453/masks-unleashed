import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public maxCapacity = new Subject<number>();
  public collections = new Subject();
  public triggerCapacityNotification = new Subject();

  constructor() { }


}
