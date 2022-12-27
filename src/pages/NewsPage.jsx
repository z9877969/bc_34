import { useSearchParams } from "react-router-dom";
import SearchForm from "../components/SearchForm/SearchForm";
import NewsGallery from "../components/NewsGallery/NewsGallery";

const NewsPage = () => {
  const [search, setSearch] = useSearchParams();
  // (dataObj) => navigate({...location, search: })
  // const search = new URLSearchParams("?q=cat&color=red&id=21")
  return (
    <div className="App">
      <SearchForm setSearch={setSearch} />
      <NewsGallery search={search} setSearch={setSearch} />
    </div>
  );
};

export default NewsPage;
