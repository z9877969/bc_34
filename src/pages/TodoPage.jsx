import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import TodoFilter from "../components/TodoFilter/TodoFilter";
import { getTodo, todoErrorMessages } from "../redux/todo/todoOperations";
import { getLocalId } from "../redux/auth/authSelectors";

const Error = () => {
  const error = useSelector((state) => state.todo.error);

  useEffect(() => {
    error &&
      error === todoErrorMessages.CONDITION_ITEM_ALREADY_EXIST &&
      alert(todoErrorMessages.CONDITION_ITEM_ALREADY_EXIST);
  }, [error]);
  return null;
};

export const TodoPage = () => {
  const dispatch = useDispatch();
  const localId = useSelector(getLocalId);

  useEffect(() => {
    localId && dispatch(getTodo());
  }, [dispatch, localId]);

  return (
    <>
      <ToDoForm />
      <TodoFilter />
      <ToDoList />
      <Error />
    </>
  );
};
