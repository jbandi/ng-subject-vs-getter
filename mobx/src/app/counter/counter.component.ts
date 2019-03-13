import { Component} from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  constructor(private counter: CounterService) { }

  get currentCount() {
    return this.counter.currentCount.value;
  }

  increment(): void {
    this.counter.applyDelta(1);
  }

  decrement(): void {
    this.counter.applyDelta(-1);
  }

  reset(): void {
    this.counter.resetCount();
  }

}
