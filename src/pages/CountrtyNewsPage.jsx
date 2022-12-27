import { Suspense } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

const CountryNewsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = (e) => {
    navigate(location.state); // null
  };

  return (
    <>
      <h1>CountryNewsPage</h1>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      <nav>
        <ul style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <li>
            <NavLink to="en" state={location.state}>
              En
            </NavLink>
          </li>
          <li>
            <NavLink to="ua" state={location.state}>
              Ua
            </NavLink>
          </li>
          <li>
            <NavLink to="pl" state={location.state}>
              Pl
            </NavLink>
          </li>
          <li>
            <NavLink to="fr" state={location.state}>
              Fr
            </NavLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CountryNewsPage;
