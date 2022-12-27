import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { useLocation, useSearchParams } from "react-router-dom";
import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
import { getSearchNews } from "../../utils/newsApi";

const NewsGallery = ({ search, setSearch }) => {
  const query = search.get("query");
  const page = Number(search.get("page"));

  const [news, setNews] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  // const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const updatePage = () => {
    setSearch({ query, page: page + 1 }); // query=cat&page=2
  };

  useEffect(() => {
    if (!query) return;
    const setSearchNews = () => {
      setIsLoading(true);
      getSearchNews(page, query)
        .then(({ articles, totalResults }) => {
          // setNews((news) => (page === 1 ? articles : [...news, ...articles]));
          setNews(articles);
          page === 1 && setTotalResults(totalResults);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    };
    setSearchNews();
  }, [page, query]);

  return (
    <>
      <NewsList news={news} page={page} />

      {isLoading && <h1>Loading...</h1>}
      {news.length > 0 && news.length < totalResults && (
        <Button cbOnClick={updatePage} />
      )}
    </>
  );
};

NewsGallery.propTypes = {
  // searchInput: PropTypes.func.isRequired,
};

export default NewsGallery;
