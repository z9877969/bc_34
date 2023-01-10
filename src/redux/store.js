import { configureStore } from "@reduxjs/toolkit";
import counterReducerFromSlice from "./counter/counterSlice";
import todoReducer from "./todo/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducerFromSlice,
    todo: todoReducer,
  },
  devTools: process.env.NODE_ENV !== "production", 
});

// const a = {
//   d: "", // "qwe"
//   c: true,
// };
// // patch -> {d: "qwe"} 
// // put -> {d: "qwe"}
