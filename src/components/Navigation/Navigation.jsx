import clsx from "clsx";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoOut } from "../../redux/auth/authSlice";
import s from "./Navigation.module.scss";

const getNavLinkClassName = ({ isActive }) =>
  clsx(s.navLink, isActive && s.activeLink);

const Navigation = () => {
  const dispatch = useDispatch();
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
      <button type="click" onClick={() => dispatch(logoOut())}>
        LogOut
      </button>
    </nav>
  );
};

export default Navigation;
