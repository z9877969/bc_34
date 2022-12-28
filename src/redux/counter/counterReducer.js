import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_RESET,
} from "./counterConstants";

export const counterReducer = (state = 100, action) => {
  console.log(action);

  switch (action.type) {
    case COUNTER_DECREMENT:
      return state - action.payload;
    case COUNTER_INCREMENT:
      return state + action.payload;
    case COUNTER_RESET:
      return 100;
    default:
      return state;
  }
};
