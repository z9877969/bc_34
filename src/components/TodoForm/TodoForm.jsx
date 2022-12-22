import { memo, useState } from "react";
import { nanoid } from "nanoid";
import s from "./TodoForm.module.scss";

const initialFormState = {
  date: "2022-12-21",
  title: "",
  descr: "",
  priority: "",
};

const TodoForm = ({ addTodo }) => {
  console.log("Form");
  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      ...form,
      id: nanoid(),
      isDone: false,
    };
    addTodo(item);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Date </span>
        <input
          className={s.input}
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Title </span>
        <input
          className={s.input}
          name="title"
          type="text"
          value={form.title}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Description </span>
        <input
          className={s.input}
          name="descr"
          type="text"
          value={form.descr}
          onChange={handleChange}
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
            onChange={handleChange}
            checked={form.priority === "low"}
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
            onChange={handleChange}
            checked={form.priority === "medium"}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioMedium">
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
            onChange={handleChange}
            checked={form.priority === "high"}
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
};

export default memo(TodoForm);
