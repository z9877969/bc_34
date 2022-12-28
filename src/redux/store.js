import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { counterReducer } from "./counter/counterReducer";
import todoReducer from "./todo/todoReducer";

// const rootReducer = (state = { a: 21, b: "qwe", c: { isOpen: false } }, action) => {
//   return { ...state, c: { isOpen: true } };
// };

const reducerA = (state = 21, action) => {
  switch (action.type) {
    case "incresePropA":
      return state + 20;
    default:
      return state;
  }
};
const reducerB = (state = "qwe", action) => {
  return state;
};
const reducerC = (state = { isOpen: false }, action) => {
  return state;
};

const rootReducer = combineReducers({
  a: reducerA,
  b: reducerB,
  c: reducerC,
  counter: counterReducer,
  todo: todoReducer,
}); // (state, action) => {return {a: 21, b: "qwe", c: { isOpen: false }}}

export const store = createStore(rootReducer, composeWithDevTools());
