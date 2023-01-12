import { createSelector } from "@reduxjs/toolkit";

export const getTodo = (state) => state.todo.items;
export const getTodoFilter = (state) => state.todo.filter;
export const getIsLoading = (state) => state.todo.isLoading;

export const getIsTodoEmpty = (state) => getTodo(state).length === 0;

export const getFilteredTodo = createSelector(
  [getTodo, getTodoFilter],
  (todo, filter) => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  }
);
