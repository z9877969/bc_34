import { Component } from "react";
import { nanoid } from "nanoid";
import s from "./TodoForm.module.scss";

class ToDoForm extends Component {
  state = {
    date: "2022-12-16",
    title: "",
    descr: "",
    priority: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      ...this.state,
      id: nanoid(),
      isDone: false,
    };
    this.props.addTodo(item);
  };

  render() {
    const { date, title, descr, priority } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          <span> Date </span>
          <input
            className={s.input}
            name="date"
            type="date"
            value={date}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          <span> Title </span>
          <input
            className={s.input}
            name="title"
            type="text"
            value={title}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          <span> Description </span>
          <input
            className={s.input}
            name="descr"
            type="text"
            value={descr}
            onChange={this.handleChange}
          />
        </label>
        <div className={s.labelWrapper}>
          <div className={s.radioWrapper}>
            <input
              className={s.input}
              id="formRadioLow"
              type="radio"
              name="priority"
              value="low"
              onChange={this.handleChange}
              checked={priority === "low"}
            />
            <label className={`${s.label} ${s.radio}`} htmlFor="formRadioLow">
              Low
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              className={s.input}
              id="formRadioMedium"
              type="radio"
              name="priority"
              value="medium"
              onChange={this.handleChange}
              checked={priority === "medium"}
            />
            <label
              className={`${s.label} ${s.radio}`}
              htmlFor="formRadioMedium"
            >
              Medium
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              className={s.input}
              id="formRadioHigh"
              type="radio"
              name="priority"
              value="high"
              onChange={this.handleChange}
              checked={priority === "high"}
            />
            <label className={`${s.label} ${s.radio}`} htmlFor="formRadioHigh">
              High
            </label>
          </div>
        </div>
        <button className={s.submit} type="submit">
          Ok
        </button>
      </form>
    );
  }
}

export default ToDoForm;

class Test {}

const test = new Test(); // constructor()
