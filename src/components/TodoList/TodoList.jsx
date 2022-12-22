import { useState, memo, useContext } from "react";
import PropTypes from "prop-types";
import s from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem";
import { TodoContext } from "../TodoPage/TodoPage";

const TodoList = ({ todo, removeTodo, todoItemRef, updateTodoStatus }) => {
  const [isChangeColor, setIsChangeColor] = useState(false);

  const value = useContext(TodoContext);

  console.log("TodoList ", value);

  return (
    <>
      <ul className={s.container}>
        {todo.map((el, idx, arr) => (
          <TodoItem
            todoItemRef={arr.length - 12 === idx ? todoItemRef : null}
            key={el.id}
            {...el}
            isChangeColor={isChangeColor}
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

export default memo(TodoList); // () => {<TodoList />}
