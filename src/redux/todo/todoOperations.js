import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateStatusApi,
} from "../../utils/firebaseApi";
import { errorHandler } from "../error/errorHandler";

export const todoErrorMessages = {
  CONDITION_ITEM_ALREADY_EXIST: "CONDITION_ITEM_ALREADY_EXIST",
};

export const addTodo = createAsyncThunk(
  "todo/add",
  async (todo, { rejectWithValue, getState, dispatch }) => {
    const { items } = getState().todo;

    if (items.some((el) => el.title === todo.title)) {
      return rejectWithValue(todoErrorMessages.CONDITION_ITEM_ALREADY_EXIST);
    }

    const { localId, idToken } = getState().auth;

    try {
      const data = await addTodoApi({ todo, localId, idToken });
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: () => addTodo(todo) })); // dispatch((() => addTodo(todo))())
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);

export const getTodo = createAsyncThunk(
  "todo/get",
  async (_, thunkApi) => {
    const { localId, idToken } = thunkApi.getState().auth;

    try {
      const data = await getTodoApi({ localId, idToken });
      return data;
    } catch (error) {
      setTimeout(() => {
        thunkApi.dispatch(errorHandler({ error, cb: getTodo }));
      }, 0);
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { items } = getState().todo;
      return !items.length;
    },
  }
);

export const removeTodo = createAsyncThunk(
  "todo/remove",
  async (id, { rejectWithValue, getState, dispatch }) => {
    const { localId, idToken } = getState().auth;

    try {
      const dataId = await removeTodoApi({ id, localId, idToken });
      return dataId;
    } catch (error) {
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: () => removeTodo(id) }));
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);

export const updateTodoStatus = createAsyncThunk(
  "todo/updateStatus",
  async ({ id, isDone }, { rejectWithValue, dispatch }) => {
    try {
      const data = await updateStatusApi({ id, isDone });
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: () => updateTodoStatus({ id, isDone }) }));
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);
