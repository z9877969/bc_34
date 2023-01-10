import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import TodoFilter from "../components/TodoFilter/TodoFilter";
import { getTodo } from "../redux/todo/todoOperations";
import { getIsTodoEmpty } from "../redux/todo/todoSelectors";
import { toggleIsOpen } from "../redux/todo/todoSlice";

export const TodoPage = () => {
  const dispatch = useDispatch();
  // const isTodoEmpty = useSelector(getIsTodoEmpty); // flag true | false

  useEffect(() => {
    dispatch(getTodo()); 
  }, [dispatch]);

  console.log("TodoPage");

  return (
    <>
      <button onClick={() => dispatch(toggleIsOpen())}>Click</button>
      <ToDoForm />
      <TodoFilter />
      <ToDoList />
    </>
  );
};

// export default TodoPage;
