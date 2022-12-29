import { useSelector } from "react-redux";
import s from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem";
import { useEffect } from "react";

const getFilteredTodo = (state) => {
  const { items, filter } = state.todo;
  if (filter === "all") return items;
  return items.filter((el) => el.priority === filter);
};

const TodoList = () => {
  const todo = useSelector(getFilteredTodo);
  // const todoToLS = useSelector((state) => state.todo.items);

  // useEffect(() => {
  //   localStorage.setItem("todo", JSON.stringify(todoToLS));
  // }, [todoToLS]);

  return (
    <ul className={s.container}>
      {todo.map((el) => (
        <TodoItem key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default TodoList;
