import { useSelector } from "react-redux";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import TodoFilter from "../components/TodoFilter/TodoFilter";

const TodoPage = () => {
  const filter = useSelector((state) => {
    console.log("TodoPage useSelector");
    return state.todo.filter;
  });

  console.log("TodoPage ", filter);
  return (
    <>
      <ToDoForm />
      <TodoFilter />
      <ToDoList />
    </>
  );
};

export default TodoPage;
