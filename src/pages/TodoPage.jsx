import {
  useState,
  useMemo,
  useCallback,
} from "react";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import { todo as todoList } from "../data/todo";
import TodoFilter from "../components/TodoFilter/TodoFilter";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoPage = () => {
  const [todo, setTodo] = useLocalStorage(todoList, "todo");
  const [filter, setFilter] = useState("all");

  // const firstRenderRef = useRef(true);

  const addTodo = useCallback(
    (newTodo) => {
      setTodo((prevTodo) => [...prevTodo, newTodo]);
    },
    [setTodo]
  );

  const removeTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((el) => el.id !== id));
  };

  const updateTodoStatus = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((el) =>
        el.id !== id ? el : { ...el, isDoneStatus: !el.isDoneStatus }
      )
    );
  };

  const filteredTodos = useMemo(() => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  }, [filter, todo]);

  return (
    <>
      <ToDoForm addTodo={addTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <ToDoList
        todo={filteredTodos}
        removeTodo={removeTodo}
        updateTodoStatus={updateTodoStatus}
      />
    </>
  );
};

export default TodoPage;
