import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
  const [, setSearch] = useSearchParams();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch({ q: input, page: 1 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
