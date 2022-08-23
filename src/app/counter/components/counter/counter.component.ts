import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from '../../store/counter.actions';
import { countSelector } from '../../store/counter.selectors';
import { AppState } from 'src/app/types/app.state.interface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent implements OnInit {
  count$: Observable<number>;
 
  constructor(private store: Store<AppState>) {
    this.count$ = this.store.pipe(select(countSelector));
  }
 
  increment() {
    this.store.dispatch(CounterActions.increment());
  }
 
  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }
 
  reset() {
    this.store.dispatch(CounterActions.reset());
  }

  ngOnInit(): void {
  }

}
