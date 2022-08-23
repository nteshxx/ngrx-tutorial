import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';
import { CounterState } from '../types/counter.state.interface';

export const initialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => ({ count: state.count + 1})),
  on(CounterActions.decrement, (state) => ({ count: state.count - 1})),
  on(CounterActions.reset, (state) => ({ count: 0 }))
);
