import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [], // request -> isLoading | items | error
    filter: "all",
    isLoading: false, // true
    error: null,
  },
  reducers: {
    addTodo(state, { payload }) { // todo/addTodo
      state.items.push(payload);
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
    addTodoRequest(state) {
      state.isLoading = true;
    },
    addTodoSuccess(state, { payload }) {
      state.isLoading = false;
      state.items.push(payload);
    },
    addTodoError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    getTodoRequest(state) {
      state.isLoading = true;
    },
    getTodoSuccess(state, { payload }) {
      state.isLoading = false;
      state.items = payload;
    },
    getTodoError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    removeTodoRequest(state) {
      state.isLoading = true;
    },
    removeTodoSuccess(state, { payload }) {
      state.isLoading = false;
      state.items = state.items.filter((el) => el.id !== payload);
    },
    removeTodoError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
  // extraReducers: {
  //   actionType1: (state) => state,
  // },
});

// request
// success
// error
console.log("addTodoSuccess :>> ", todoSlice.actions.addTodoSuccess());

export const {
  addTodo,
  remove,
  updateStatus,
  changeFilter,
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  getTodoRequest,
  getTodoSuccess,
  getTodoError,
  removeTodoRequest,
  removeTodoSuccess,
  removeTodoError,
} = todoSlice.actions;

export default todoSlice.reducer;
