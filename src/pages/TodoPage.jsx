import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import TodoFilter from "../components/TodoFilter/TodoFilter";

export const TodoPage = () => {
  return (
    <>
      <ToDoForm />
      <TodoFilter />
      <ToDoList />
    </>
  );
};

// export default TodoPage;
