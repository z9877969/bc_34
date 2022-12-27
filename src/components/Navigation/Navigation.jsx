import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";
import s from "./Navigation.module.scss";

const getNavLinkClassName = ({ isActive }) =>
  clsx(s.navLink, isActive && s.activeLink);

const Navigation = () => {
  const location = useLocation();

  // console.log("location :>> ", location); // location todo

  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink className={getNavLinkClassName} to="/">
            Home
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink className={getNavLinkClassName} to="/todo">
            Todo
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink className={getNavLinkClassName} to="/news">
            News
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink
            className={getNavLinkClassName}
            to={{ pathname: "/country-news", search: "?q=red" }}
            state={location}
          >
            CountryNews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
