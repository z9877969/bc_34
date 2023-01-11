import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateStatusApi,
} from "../../utils/firebaseApi";

export const todoErrorMessages = {
  CONDITION_ITEM_ALREADY_EXIST: "CONDITION_ITEM_ALREADY_EXIST",
};

export const addTodo = createAsyncThunk(
  "todo/add",
  async (todo, { rejectWithValue, getState }) => {
    const { items } = getState().todo;

    if (items.some((el) => el.title === todo.title)) {
      return rejectWithValue(todoErrorMessages.CONDITION_ITEM_ALREADY_EXIST);
    }

    const { localId, idToken } = getState().auth;

    try {
      const data = await addTodoApi({ todo, localId, idToken });
      return data;
    } catch (error) {
      console.log(error.message);
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
  async (id, { rejectWithValue, getState }) => {
    const { localId, idToken } = getState().auth;

    try {
      const dataId = await removeTodoApi({ id, localId, idToken });
      return dataId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTodoStatus = createAsyncThunk(
  "todo/updateStatus",
  async ({ id, isDone }, { rejectWithValue }) => {
    try {
      const data = await updateStatusApi({ id, isDone });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
