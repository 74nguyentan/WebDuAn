import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentShareService {

  constructor() { }

  private countValue: Subject<any> = new Subject();

  public get ValueFromChild() {
      return this.countValue;
  }

  public notifyCountValue(any) {
      this.countValue.next(any);
  }

}
