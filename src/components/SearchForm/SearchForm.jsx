import { useState } from "react";
import PropTypes from "prop-types";
import s from "./SearchForm.module.scss";

const SearchForm = ({ setSearchInput }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput(input);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        name="input"
        value={input}
        placeholder="Search..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

SearchForm.propTypes = {
  setSearchInput: PropTypes.func.isRequired,
};

export default SearchForm;
