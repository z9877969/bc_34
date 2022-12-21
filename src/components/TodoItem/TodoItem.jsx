import { Component } from "react";
import clsx from "clsx";
import s from "./TodoItem.module.scss";
import sprite from "../../assets/icons/sprite.svg";

class TodoItem extends Component {
  state = {
    count: 0,
  };

  intrevalId = null;

  componentDidMount() {
    this.intrevalId = setInterval(() => {
      this.setState((prev) => ({ count: prev.count + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intrevalId);
  }

  render() {
    const {
      id,
      date,
      isDone,
      title,
      descr,
      priority,
      updateTodoStatus,
      removeTodo,
    } = this.props;
    const { count } = this.state;

    return (
      <li key={id} className={s.toDoItem}>
        <p className={s.date}>Timer: {count}</p>
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
      </li>
    );
  }
}

export default TodoItem;
