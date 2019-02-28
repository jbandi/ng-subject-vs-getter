import { Component, Input } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  constructor(private counter: CounterService) { }

  @Input() text: string;

  get currentCount() {
    return this.counter.currentCount.value;
  }

}
