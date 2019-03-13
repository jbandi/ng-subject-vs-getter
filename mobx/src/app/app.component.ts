import { Component } from '@angular/core';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Behavior Subject Demo';
  counter$ = timer(0, 1000);
}
