import { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = ({
  options = [],
  initialValues = {},
  to,
  linkTitle,
  cbOnSubmit,
  submitBtnTitle,
}) => {
  const [form, setForm] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cbOnSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      {options.map((el) => (
        <label key={el.name}>
          <p>{el.title}</p>
          <input
            type={el.type}
            name={el.name}
            value={form[el.name]}
            onChange={handleChange}
            placeholder={el.placeholder}
          />
        </label>
      ))}
      <div>
        <button type="submit">{submitBtnTitle}</button>
        <Link to={to}>{linkTitle}</Link>
      </div>
    </form>
  );
};

export default AuthForm;
