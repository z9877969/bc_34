import {
  useEffect,
  useState,
  useMemo,
  useCallback,
  createContext,
} from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Container from "../Container/Container";
import PriorityFilter from "../TodoForm/PriorityFilter/PriorityFilter";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";

const TodoPage = () => {
  const [todo, setTodo] = useLocalStorage("todo", []);
  const addTodo = useCallback((item) => {
    setTodo((prevTodo) => [...prevTodo, item]);
  }, []);

  const removeTodo = useCallback(
    (id) => {
      setTodo((prevTodo) => prevTodo.filter((el) => el.id !== id));
    }, // fnRef-1 | fnRef-1 | fnRef-1
    []
  );

  const updateTodoStatus = useCallback((id) => {
    setTodo((prev) =>
      prev.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  }, []);

  return (
    <Container>
      <ToDoForm addTodo={addTodo} />
      <PriorityFilter />
      <ToDoList
        todo={todo}
        removeTodo={removeTodo}
        updateTodoStatus={updateTodoStatus}
      />
    </Container>
  );
};

export default TodoPage;
