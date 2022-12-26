import { NavLink, Outlet } from "react-router-dom";

const CountryNewsPage = () => {
  return (
    <>
      <h1>CountryNewsPage</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="en">En</NavLink>
          </li>
          <li>
            <NavLink to="ua">Ua</NavLink>
          </li>
          <li>
            <NavLink to="pl">Pl</NavLink>
          </li>
          <li>
            <NavLink to="fr">Fr</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default CountryNewsPage;
