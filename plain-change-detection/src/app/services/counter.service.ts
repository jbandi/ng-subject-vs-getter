import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

interface Count {
  value: number;
}

@Injectable()
export class CounterService {

  constructor() { }

  currentCount: Count = {value: 0};

  applyDelta(delta: number): void {
    this.currentCount = {value: (this.currentCount.value + delta)};
  }

  /** Resets the count to the initial value */
  resetCount(): void {
    this.currentCount = {value: 0};
  }
}
