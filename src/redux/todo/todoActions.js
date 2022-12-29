import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction("todo/add");
export const removeTodo = createAction("todo/remove");
export const updateTodoStatus = createAction("todo/updateStatus");

export const changeTodoFilter = createAction("todo/changeFilter");
