import { useState } from "react";
// import PropTypes from "prop-types";
// import { useLocation, useNavigate } from "react-router-dom";
import s from "./SearchForm.module.scss";

const SearchForm = ({ setSearch }) => {
  // const navigate = useNavigate();
  // const location = useLocation();

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    // navigate({ ...location, search: `query=${input}` });
    setSearch({ query: input, page: 1 });
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
  // setSearchInput: PropTypes.func.isRequired,
};

export default SearchForm;
