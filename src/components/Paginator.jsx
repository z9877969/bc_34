const listStyle = {
  padding: "16px 8px",
  display: "flex",
  width: "200px",
  justifyContent: "space-between",
  margin: "0 auto",
};

const getSearchParams = (search) => {
  const params = {};

  for (const [key, value] of search.entries()) {
    // [q, dog]
    // [page, 7]
    params[key] = value;
  }

  return params;
};

const Paginator = ({ setSearch, search }) => {
  const searchParams = getSearchParams(search);

  const handlePrevBtn = () => {
    const pageNumber = Number(searchParams.page);
    if (pageNumber <= 1) return;
    setSearch({ ...searchParams, page: pageNumber - 1 });
  };

  const handleNextBtn = () => {
    const pageNumber = Number(searchParams.page);
    setSearch({ ...searchParams, page: pageNumber + 1 });
  };

  return (
    <ul style={listStyle}>
      <li>
        <button
          type="button"
          onClick={handlePrevBtn}
          disabled={searchParams.page === "1"}
        >
          Prev
        </button>
      </li>
      <li>
        <button type="button" onClick={handleNextBtn}>
          Next
        </button>
      </li>
    </ul>
  );
};

export default Paginator;
