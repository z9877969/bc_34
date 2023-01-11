import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { getCurUser } from "../redux/auth/authOperations";
import { getIsAuth } from "../redux/auth/authSelectors";
import SharedLayout from "./SharedLayout/SharedLayout";

const TodoPage = lazy(() =>
  import("../pages/TodoPage").then((module) => ({
    ...module,
    default: module.TodoPage,
  }))
);
const HomePage = lazy(() => import("../pages/HomePage"));
const CounterPage = lazy(() => import("../pages/CounterPage"));

const App = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(getIsAuth);

  useEffect(() => {
    dispatch(getCurUser());
  }, [dispatch]);

  return isAuth ? (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/counter" element={<CounterPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
