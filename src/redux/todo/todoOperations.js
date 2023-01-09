import { addTodoApi, getTodoApi, removeTodoApi } from "../../utils/firebaseApi";
import {
  addTodoError,
  addTodoRequest,
  addTodoSuccess,
  getTodoError,
  getTodoRequest,
  getTodoSuccess,
  removeTodoError,
  removeTodoRequest,
  removeTodoSuccess,
} from "./todoSlice";

export const addTodo = (todo) => {
  return (dispatch) => {
    dispatch(addTodoRequest()); // {type: "request"}
    addTodoApi(todo)
      .then((data) => dispatch(addTodoSuccess(data))) // {type: success, payloadf: data}
      .catch((err) => {
        dispatch(addTodoError(err.message)); // {type: error, payload: err.massage}
      });
  };
};

export const getTodo = () => async (dispatch) => {
  dispatch(getTodoRequest());

  try {
    const data = await getTodoApi();
    dispatch(getTodoSuccess(data));
  } catch (error) {
    dispatch(getTodoError(error.message));
  }
};

export const removeTodo = (id) => async (dispatch) => {
  dispatch(removeTodoRequest());

  try {
    const dataId = await removeTodoApi(id);
    dispatch(removeTodoSuccess(dataId));
  } catch (error) {
    dispatch(removeTodoError(error.message));
  }
};
