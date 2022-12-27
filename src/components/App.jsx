import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
// import NewsPage from "../pages/NewsPage";
// import TodoPage from "../pages/TodoPage";
// import CountryNewsPage from "../pages/CountrtyNewsPage";
// import CountryNewsList from "./CountryNewsList/CountryNewsList";

const TodoPage = lazy(() => import("../pages/TodoPage"));
const NewsPage = lazy(() => import("../pages/NewsPage"));
const CountryNewsPage = lazy(() => import("../pages/CountrtyNewsPage"));
const CountryNewsList = lazy(() => import("./CountryNewsList/CountryNewsList"));

const ShareLayout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

const SuspenseWrapper = ({ children }) => {
  return <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<h1>HomePage</h1>} />
          <Route
            path="/todo"
            element={
              <SuspenseWrapper>
                <TodoPage />
              </SuspenseWrapper>
            }
          />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/country-news" element={<CountryNewsPage />}>
            <Route path=":country" element={<CountryNewsList />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
