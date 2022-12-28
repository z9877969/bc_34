import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { counterReducer } from "./counter/counterReducer";
import todoReducer from "./todo/todoReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
}); 

export const store = createStore(rootReducer, composeWithDevTools());
