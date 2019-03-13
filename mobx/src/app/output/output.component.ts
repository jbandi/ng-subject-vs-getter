import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutputComponent {

  constructor(private counter: CounterService) { }

  @Input() text: string;

  get currentCount() {
    return this.counter.currentCount.value;
  }

  get square() {
    return this.counter.derivedSquare;
  }

  get randomValue(): string {
    return `${Math.random().toFixed(2)}`;
  }

}
