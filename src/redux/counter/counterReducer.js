import { createReducer } from "@reduxjs/toolkit";
import { counterDecrementAction, counterIncrementAction, counterReset } from "./counterActions";

export const counterReducer = createReducer(100, (builder) => {
  builder
    .addCase(counterDecrementAction, (state, { payload }) => {
      return state - payload;
    })
    .addCase(counterIncrementAction, (state, { payload }) => state + payload)
    .addCase(counterReset, () => 100);
  // .addMatcher(
  //   (action) => action.payload === 20,
  //   (state, action) => state * action.payload - 15
  // );
  // .addDefaultCase((state) => state + 1);
});

export const isLoadingReducer = createReducer(false, (b) =>
  b
    .addMatcher(
      (action) => action.type.endsWith("/pending"),
      () => true
    )
    .addMatcher(
      (action) =>
        action.type.endsWith("/fulfilled") || action.type.endsWith("/rejected"),
      () => false
    )
);
