import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/types/app.state.interface";

export const selectFeature = (state: AppState) => state.counter;

export const countSelector = createSelector(selectFeature, state => state.count);
