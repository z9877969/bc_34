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

const PrivateRoute = ({
  children,
  // component: Component,
  redirectTo = "/login",
}) => {
  const isAuth = useSelector(getIsAuth);
  return isAuth ? children : <Navigate to={redirectTo} />;
  // return isAuth ? <Component /> : <Navigate to={"/login"} />;
};

const PublicRoute = ({ component, restricted, redirectTo = "/todo" }) => {
  const isAuth = useSelector(getIsAuth);
  // return isAuth && restricted ? <Navigate to={"/"} /> : component;
  return !isAuth ? component : <Navigate to={redirectTo} />;
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route index element={<PublicRoute component={<HomePage />} />} /> */}
        <Route index element={<HomePage />} />
        <Route
          path="/todo"
          element={
            <PrivateRoute redirectTo="/">
              <TodoPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/counter"
          element={
            <PrivateRoute redirectTo="/register">
              <CounterPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={<PublicRoute restricted component={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={<PublicRoute restricted component={<RegisterPage />} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
