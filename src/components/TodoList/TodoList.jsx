import { useSelector } from "react-redux";
import { getFilteredTodo, getIsLoading } from "../../redux/todo/todoSelectors";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const TodoList = () => {
  const todo = useSelector(getFilteredTodo);
  const isLoading = useSelector(getIsLoading);

  console.log("TodoList");

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
