import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../counter/counterSlice";
import {
  addTodo,
  getTodo,
  removeTodo,
  updateTodoStatus,
} from "./todoOperations";

console.log(addTodo.pending());

const pending = (state) => {
  state.isLoading = true;
};
const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [], // request -> isLoading | items | error
    filter: "all",
    isLoading: false, // true
    error: null,
    isOpen: false,
  },
  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
    toggleIsOpen(state) {
      state.isOpen = !state.isOpen;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(addTodo.pending, pending)
      .addCase(addTodo.rejected, rejected)
      .addCase(getTodo.pending, pending)
      .addCase(getTodo.rejected, rejected)
      .addCase(removeTodo.pending, pending)
      .addCase(removeTodo.rejected, rejected)
      .addCase(updateTodoStatus.pending, pending)
      .addCase(updateTodoStatus.rejected, rejected)
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(getTodo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(removeTodo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter((el) => el.id !== payload);
      })
      .addCase(updateTodoStatus.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map(
          (el) => (el.id !== payload.id ? el : { ...el, ...payload }) // el
        );
      }),
});

export const { changeFilter, toggleIsOpen } = todoSlice.actions;

export default todoSlice.reducer;
