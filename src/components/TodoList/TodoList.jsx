import { useSelector } from "react-redux";
import s from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem";

const getFilteredTodo = (state) => {
  const { items, filter } = state.todo;
  if (filter === "all") return items;
  return items.filter((el) => el.priority === filter);
};

const TodoList = () => {
  const todo = useSelector(getFilteredTodo);

  return (
    <ul className={s.container}>
      {todo.map((el) => (
        <TodoItem key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default TodoList;
