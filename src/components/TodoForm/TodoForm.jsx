import { Component } from "react";
import { nanoid } from "nanoid";
import s from "./TodoForm.module.scss";

class ToDoForm extends Component {
  state = {
    date: "",
    title: "",
    descr: "",
    priority: "",
    // color: [],
  };

  handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "color") {
      if (checked) {
        this.setState((prev) => ({
          [name]: [...prev[name], value],
        }));
      } else {
        this.setState((prev) => ({
          [name]: prev[name].filter((el) => el !== value),
        }));
      }
      return;
    }

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
    // console.log("this.state.title :>> ", this.state.title);
    const { date, title, descr, priority, color } = this.state;
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
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          <span> Description </span>
          <input
            className={s.input}
            type="text"
            name="descr"
            value={descr}
            onChange={this.handleChange}
          />
        </label>

        <div className={s.labelWrapper}>
          <div className={s.radioWrapper}>
            <input
              id="formRadioLow"
              className={s.input}
              type="radio"
              name="priority"
              checked={"low" === priority}
              value="low"
              onChange={this.handleChange}
            />
            <label className={`${s.label} ${s.radio}`} htmlFor="formRadioLow">
              Low
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              id="formRadioMedium"
              className={s.input}
              type="radio"
              name="priority"
              checked={"medium" === priority}
              value="medium"
              onChange={this.handleChange}
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
              id="formRadioHigh"
              className={s.input}
              type="radio"
              name="priority"
              checked={"high" === priority}
              value="high"
              onChange={this.handleChange}
            />
            <label className={`${s.label} ${s.radio}`} htmlFor="formRadioHigh">
              High
            </label>
          </div>
        </div>
        {/* <div>
          <label>
            red
            <input
              type="checkbox"
              name="color"
              value="red"
              checked={color.includes("red")}
              onChange={this.handleChange}
            />
          </label>

          <label>
            yellow
            <input
              type="checkbox"
              name="color"
              value="yellow"
              checked={color.includes("yellow")}
              onChange={this.handleChange}
            />
          </label>

          <label>
            green
            <input
              type="checkbox"
              name="color"
              value="green"
              checked={color.includes("green")}
              onChange={this.handleChange}
            />
          </label>
        </div> */}
        <button
          className={s.submit}
          type="submit"
          // style={{ backgroundColor: this.state.title.length > 6 ? "green" : "red" }}
        >
          Ok
        </button>
      </form>
    );
  }
}

export default ToDoForm;
