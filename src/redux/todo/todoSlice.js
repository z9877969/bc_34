import { createSlice } from "@reduxjs/toolkit";
import { logoOut } from "../auth/authSlice";
import {
  addTodo,
  getTodo,
  removeTodo,
  updateTodoStatus,
} from "./todoOperations";

const initialState = {
  items: [],
  filter: "all",
  isLoading: false,
  error: null,
  isOpen: false,
};

const pending = (state) => {
  state.isLoading = true;
};
const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
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
      })
      .addCase(logoOut, () => initialState),
});

export const { changeFilter } = todoSlice.actions;

export default todoSlice.reducer;
