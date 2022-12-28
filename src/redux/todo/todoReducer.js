import { combineReducers } from "redux";
import {
  TODO_ADD,
  TODO_CHANGE_FILTER,
  TODO_REMOVE,
  TODO_UPDATE_STATUS,
} from "./todoConstants";

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case TODO_ADD:
      return [...state, payload];
    case TODO_REMOVE:
      return state.filter((el) => el.id !== payload);
    case TODO_UPDATE_STATUS:
      return state.map((el) =>
        el.id !== payload ? el : { ...el, isDone: !el.isDone }
      );
    default:
      return state;
  }
};

const filterReducer = (state = "all", { type, payload }) => {
  switch (type) {
    case TODO_CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

const todoReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todoReducer;
