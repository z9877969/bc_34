import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addTodo,
  changeTodoFilter,
  removeTodo,
  updateTodoStatus,
} from "./todoActions";

const itemsReducer = createReducer([], (builder) => {
  builder
    .addCase(addTodo, (state, { payload }) => {
      state.push(payload);
      // return [...state, payload];
    })
    .addCase(removeTodo, (state, { payload }) =>
      state.filter((el) => el.id !== payload)
    )
    .addCase(updateTodoStatus, (state, { payload }) =>
      state.map((el) =>
        el.id !== payload ? el : { ...el, isDone: !el.isDone }
      )
    );
});

const filterReducer = createReducer("all", (builder) => {
  builder.addCase(changeTodoFilter, (_, { payload }) => payload);
});

const todoReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todoReducer;

// export const propReducer = createReducer(null, (builder) => {
//   builder.addCase("test", (state, { payload }) => {
//     return state + payload;
//   })
//   .addCase()
//   .addCase();
// });
