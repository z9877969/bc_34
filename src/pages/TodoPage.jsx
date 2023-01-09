import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import TodoFilter from "../components/TodoFilter/TodoFilter";
import { getTodo } from "../redux/todo/todoOperations";

export const TodoPage = () => {
  const dispatch = useDispatch();
  const isTodoEmpty = useSelector((state) => state.todo.items.length === 0); // flag true | false


  useEffect(() => {
    isTodoEmpty && dispatch(getTodo()); //
  }, [dispatch, isTodoEmpty]);

  console.log("TodoPage");

  return (
    <>
      <ToDoForm />
      <TodoFilter />
      <ToDoList />
    </>
  );
};

// export default TodoPage;
