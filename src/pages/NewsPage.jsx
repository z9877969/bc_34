import { useState } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import NewsGallery from "../components/NewsGallery/NewsGallery";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const [searchInput, setSearchInput] = useState("");

  const params = useParams();

  console.log(params);

  return (
    <div className="App">
      <SearchForm setSearchInput={setSearchInput} />
      <NewsGallery searchInput={searchInput} />
    </div>
  );
};

export default NewsPage;
