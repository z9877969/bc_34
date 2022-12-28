import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_RESET } from "./counterConstants";

export const counterDecrementAction = (step) => {
  return {
    type: COUNTER_DECREMENT,
    payload: step,
  };
};

export const counterIncrementAction = (value) => {
  return {
    type: COUNTER_INCREMENT,
    payload: value,
  };
};

export const counterReset = () => ({
    type: COUNTER_RESET
})
