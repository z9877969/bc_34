import { Component } from "react";
import { Formik, Field, Form } from "formik";
import { nanoid } from "nanoid";
import s from "./TodoForm.module.scss";
import * as yup from "yup";

let schema = yup.object().shape({
  date: yup.string().required("Date is required"),
  title: yup
    .string()
    .min(2, "Must min 2")
    .max(25, "Must max 25")
    .required("Title is required"),
  descr: yup.mixed().test({
    name: "description",
    // exclusive: true,
    params: { a: "test", b: "qwe" },
    message: "${path} is not a phone",
    test: (value) => {
      return /\w+[^\s]\w+@\w+\.\w{1,5}/.test(
        value
      );
    },
  }),
  priority: yup.string().required("Priority is required"),
});

class ToDoForm extends Component {
  initialState = {
    date: "2022-12-16",
    title: "",
    descr: "",
    priority: "",
  };

  render() {
    return (
      <Formik
        initialValues={this.initialState}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          const item = {
            ...values,
            id: nanoid(),
            isDone: false,
          };
          this.props.addTodo(item);
          // fetch(values)
          resetForm();
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form className={s.form}>
            {/* {console.log(errors)}
            {console.log(touched)}
            {console.log("isValidating :>> ", isValidating)} */}
            <label className={s.label}>
              <span> Date </span>
              <Field className={s.input} name="date" type="date" />
            </label>
            <label className={s.label}>
              <span> Title </span>
              <Field className={s.input} name="title" type="text" />
              {errors.title && touched.title && <p>{errors.title}</p>}
            </label>
            <label className={s.label}>
              <span> Description </span>
              <Field className={s.input} name="descr" />
              {errors.descr && touched.descr && <p>{errors.descr}</p>}
            </label>
            <div className={s.labelWrapper}>
              <div className={s.radioWrapper}>
                <Field
                  className={s.input}
                  id="formRadioLow"
                  type="radio"
                  name="priority"
                  value="low"
                />
                <label
                  className={`${s.label} ${s.radio}`}
                  htmlFor="formRadioLow"
                >
                  Low
                </label>
              </div>
              <div className={s.radioWrapper}>
                <Field
                  className={s.input}
                  id="formRadioMedium"
                  type="radio"
                  name="priority"
                  value="medium"
                />
                <label
                  className={`${s.label} ${s.radio}`}
                  htmlFor="formRadioMedium"
                >
                  Medium
                </label>
              </div>
              <div className={s.radioWrapper}>
                <Field
                  className={s.input}
                  id="formRadioHigh"
                  type="radio"
                  name="priority"
                  value="high"
                />
                <label
                  className={`${s.label} ${s.radio}`}
                  htmlFor="formRadioHigh"
                >
                  High
                </label>
              </div>
              {errors.priority && touched.priority && <p>{errors.priority}</p>}
            </div>
            <button className={s.submit} type="submit">
              Ok
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default ToDoForm;
// /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/

// const F = ({type = "text"}) => {
//   return <input type={type} />
// }

// const FormT = () => {

//   const handleSubmit = e => {
//     e.preventDefault();
//     cbOnSubmit(state, methods)
//   }

//   return <form onSubmit={handleSubmit}></form>
// }
