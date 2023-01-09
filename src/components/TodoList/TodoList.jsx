import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const getFilteredTodo = (state) => {
  const { items, filter } = state.todo;
  if (filter === "all") return items;
  return items.filter((el) => el.priority === filter);
};

const TodoList = () => {
  const todo = useSelector(getFilteredTodo);
  const isLoading = useSelector((state) => state.todo.isLoading);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <ul className={s.container}>
      {todo.map((el) => (
        <TodoItem key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default TodoList;
