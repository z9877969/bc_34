import { createAction } from "@reduxjs/toolkit";

// export const counterDecrementAction = (step) => {
//   return {
//     type: COUNTER_DECREMENT,
//     payload: step,
//   };
// };
export const counterDecrementAction = createAction("counter/decrement"); // (payload) => ({type, payload})
// console.log(counterDecrementAction(54));

// export const counterIncrementAction = (value) => {
//   return {
//     type: COUNTER_INCREMENT,
//     payload: value,
//   };
// };
export const counterIncrementAction = createAction("counter/increment");

// export const counterReset = () => ({
//   type: COUNTER_RESET,
// });
export const counterReset = createAction("counter/reset");
