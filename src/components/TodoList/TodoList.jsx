import PropTypes from "prop-types";
import s from "./TodoList.module.scss";
import sprite from "../../assets/icons/sprite.svg";
import clsx from "clsx";

const TodoList = ({ todo, removeTodo, updateTodoStatus }) => {
  return (
    <ul className={s.container}>
      {todo.map(({ title, descr, id, date, isDone, priority }) => (
        <li key={id} className={s.toDoItem}>
          <p className={s.date}>{date}</p>
          <h3 className={clsx(s.title, isDone && s.isDone)}>{title}</h3>
          <p className={clsx(s.descr, isDone && s.isDone)}>{descr}</p>
          <p className={clsx(s.descr, isDone && s.isDone)}>{priority.toUpperCase()}</p>
          <label className={s.status}>
            <input
              type="checkbox"
              name="status"
              onChange={() => updateTodoStatus(id)}
            />
            Done
          </label>
          <button className={s.todoBtn} onClick={() => removeTodo(id)}>
            <svg className={s.icon}>
              <use href={sprite + "#icon-trash"}></use>
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodoStatus: PropTypes.func.isRequired,
};

export default TodoList;
