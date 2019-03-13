import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { action, computed, observable } from 'mobx-angular';

class Count {
  @observable value: number;
}

@Injectable()
export class CounterService {
  constructor() {}

  @observable currentCount: Count = { value: 0 };
  @computed get derivedSquare() {
    const square = this.currentCount.value * this.currentCount.value;
    console.log('Calculating square: ', square);
    return square;
  }

  @action()
  applyDelta(delta: number): void {
    this.currentCount = { value: this.currentCount.value + delta };
  }

  /** Resets the count to the initial value */
  resetCount(): void {
    this.currentCount = { value: 0 };
  }
}
