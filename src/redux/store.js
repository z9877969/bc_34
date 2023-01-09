import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import counterReducerFromSlice from "./counter/counterSlice";
import todoReducer from "./todo/todoSlice";

const customLogger = (store) => (next) => (action) => {
  console.group("actionType", action.type);
  const prevState = store.getState();
  console.log("prevState", prevState);
  console.log("action :>> ", action);
  next(action); // -> action -> middleware | reducer
  const nextState = store.getState();
  console.log("nextState :>> ", nextState);
  console.groupEnd();
};

// const middleware = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log("MIDDLEWARE");
//       console.log(action);
//       next(action);
//     };
//   };
// };

// const fn = (a,b,c) => {}
// const fnA = a => b => c => {}

// const thunk = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     action(store.dispatch, store.getState);
//     return;
//   }
//   next(action);
// };

export const store = configureStore({
  reducer: {
    counter: counterReducerFromSlice,
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    customLogger,
  ],
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customLogger),
  devTools: process.env.NODE_ENV !== "production", // true
});
