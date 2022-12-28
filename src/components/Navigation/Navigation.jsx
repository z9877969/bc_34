import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.scss";

const getNavLinkClassName = ({ isActive }) =>
  clsx(s.navLink, isActive && s.activeLink);

const Navigation = () => {
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
          <NavLink className={getNavLinkClassName} to="/counter">
            Counter
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
