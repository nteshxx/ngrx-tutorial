import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter] Increment count');

export const decrement = createAction('[Counter] Decrement count');

export const reset = createAction('[Counter] Reset count');
