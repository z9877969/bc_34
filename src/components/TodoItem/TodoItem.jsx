import { Component, useEffect, useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import s from "./TodoItem.module.scss";
import sprite from "../../assets/icons/sprite.svg";
import { ModalContext } from "../../context/ModalContext";

const TodoItem = ({
  id,
  date,
  isDone,
  title,
  descr,
  priority,
  isChangeColor,
  todoItemRef,
  updateTodoStatus,
  removeTodo,
}) => {
  const setModalComponent = useContext(ModalContext);

  const [count, setCount] = useState(0); // useState() -> [data, setData]

  const intervalIdRef = useRef(null); // outside ref

  const startTimer = () => {
    intervalIdRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalIdRef.current);
  };

  return (
    <li
      ref={todoItemRef}
      style={{ backgroundColor: isChangeColor ? "red" : "teal" }}
      key={id}
      className={s.toDoItem}
    >
      <p className={s.date}>Timer: {count}</p>
      <button type="button" onClick={startTimer}>
        StartTimer
      </button>
      <button type="button" onClick={stopTimer}>
        StopTimer
      </button>
      <p className={s.date}>{date}</p>
      <h3 className={clsx(s.title, isDone && s.isDone)}>{title}</h3>
      <p className={clsx(s.descr, isDone && s.isDone)}>{descr}</p>
      <p className={clsx(s.descr, isDone && s.isDone)}>
        {priority.toUpperCase()}
      </p>
      <label className={s.status}>
        <input
          type="checkbox"
          name="status"
          onChange={() => updateTodoStatus(id)}
          checked={isDone}
        />
        Done
      </label>
      <button className={s.todoBtn} onClick={() => removeTodo(id)}>
        <svg className={s.icon}>
          <use href={sprite + "#icon-trash"}></use>
        </svg>
      </button>
      <button
        className={s.todoBtn}
        onClick={() => setModalComponent(<h1>Edit form -{id}</h1>)}
      >
        <svg className={s.icon}>
          <use href={sprite + "#icon-edit-pencil"}></use>
        </svg>
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  updateTodoStatus: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
