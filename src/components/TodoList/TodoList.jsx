import { memo, useContext } from "react";
import PropTypes from "prop-types";
import s from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem";
import { FilterContext } from "../../context/FilterContext";

const TodoList = ({ todo, removeTodo, todoItemRef, updateTodoStatus }) => {
  const { filter } = useContext(FilterContext);

  const todoList = () => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter); // [1,2,3] -> [1,2,3]
  };

  return (
    <>
      <ul className={s.container}>
        {todoList().map((el) => (
          <TodoItem
            key={el.id}
            {...el}
            removeTodo={removeTodo}
            updateTodoStatus={updateTodoStatus}
          />
        ))}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodoStatus: PropTypes.func.isRequired,
};

export default memo(TodoList);
