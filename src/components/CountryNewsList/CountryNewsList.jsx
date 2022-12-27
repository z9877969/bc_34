import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useSetModal } from "../../context/ModalProvider";
import { getTopNews } from "../../utils/newsApi";

const CountryNewsList = () => {
  const { country } = useParams();
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const setModal = useSetModal();

  useEffect(() => {
    setIsLoading(true);
    getTopNews(country)
      .then(({ articles }) => {
        setNews(articles);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [country]);

  useEffect(() => {
    if (error) {
      setModal(<h1>{error.message}</h1>);
      setError(null);
    }
  }, [error, setModal]);

  return (
    <>
      <h1>{country.toUpperCase()} News</h1>
      <Outlet />
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <ul>
          {news.map((el) => (
            <li
              style={{ marginBottom: "10px", borderBottom: "1px solid black" }}
            >
              {el.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CountryNewsList;
