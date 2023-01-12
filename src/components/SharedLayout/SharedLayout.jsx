import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { getIsAuth } from "../../redux/auth/authSelectors";
import Navigation from "../Navigation/Navigation";

const SharedLayout = () => {
  const isAuth = useSelector(getIsAuth);
  return (
    <>
      {isAuth ? (
        <Navigation />
      ) : (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      )}
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
