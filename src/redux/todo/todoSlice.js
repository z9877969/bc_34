import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
  },
  reducers: {
    addTodo(state, { payload }) {
      state.items.push(payload);
      //   return {
      //     ...state,
      //     items: [...state.items, payload],
      //   };
    },
    remove(state, { payload }) {
      state.items = state.items.filter((el) => el.id !== payload);
    },
    updateStatus(state, { payload }) {
      state.items = state.items.map((el) =>
        el.id !== payload ? el : { ...el, isDone: !el.isDone }
      );
    },
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addTodo, remove, updateStatus, changeFilter } =
  todoSlice.actions;

export default todoSlice.reducer;
