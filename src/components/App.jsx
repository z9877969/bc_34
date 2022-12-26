import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import NewsPage from "../pages/NewsPage";
import TodoPage from "../pages/TodoPage";
import CountryNewsPage from "../pages/CountrtyNewsPage";
import CountryNewsList from "./CountryNewsList/CountryNewsList";

const ShareLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<h1>HomePage</h1>} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/country-news" element={<CountryNewsPage />}>
            <Route path=":country" element={<CountryNewsList />} />
            <Route path="test" element={<h2>Test</h2>} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
