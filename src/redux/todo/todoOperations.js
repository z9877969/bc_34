import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateStatusApi,
} from "../../utils/firebaseApi";

export const addTodo = createAsyncThunk(
  "todo/add",
  async (todo, thunkApi) => {
    // dispatch({type: "todo/add/pending"})
    try {
      const data = await addTodoApi(todo);
      return data; // dispatch({type: todo/add/fulfilled, payload: data})
    } catch (error) {
      return thunkApi.rejectWithValue(error.message); // // dispatch({type: todo/add/rejected, payload: error.message})
    }
  },
  {
    condition: (todo, options) => {
      console.log("options :>> ", options);
      const { items } = options.getState().todo;
      if (items.find((el) => el.title === todo.title)) {
        // alert("Todo already")
        return false;
      } // false
      return true;
    },
  }
); // -> todo/add/pending | todo/add/fulfilled | todo/add/rejected
// dispatch(addTodo({...form, isDone: false}))

export const getTodo = createAsyncThunk(
  "todo/get",
  async (_, thunkApi) => {
    console.log("thunkApi :>> ", thunkApi);
    try {
      const data = await getTodoApi();
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
  async (id, { rejectWithValue }) => {
    try {
      const dataId = await removeTodoApi(id);
      return dataId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const updateTodoStatus =
//   ({ id, isDone }) =>
//   (dispatch) => {
//     dispatch(upadateStatusTodoRequest());

//     updateStatusApi({ id, isDone })
//       .then((data) => dispatch(upadateStatusTodoSuccess(data)))
//       .catch((err) => dispatch(upadateStatusTodoError(err.message)));
//   };

export const updateTodoStatus = createAsyncThunk(
  "todo/updateStatus",
  async ({ id, isDone }, { rejectWithValue }) => {
    // dispatch({type: "todo/updateStatus/pending"})
    try {
      const data = await updateStatusApi({ id, isDone });
      return data; // dispatch({type: "todo/updateStatus/fulfilled", payload: data})
    } catch (error) {
      return rejectWithValue(error.message); // dispatch({type: "todo/updateStatus/rejected", payload: error.message})
    }
  }
);
