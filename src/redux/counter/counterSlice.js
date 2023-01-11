import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 100,
  reducers: {
    decrement(state, { payload }) {
      return state - payload;
    },
    increment(state, { payload }) {
      return state + payload;
    },
    reset() {
      return 100;
    },
  },
});

export const { decrement, increment, reset } = counterSlice.actions;

export default counterSlice.reducer;
