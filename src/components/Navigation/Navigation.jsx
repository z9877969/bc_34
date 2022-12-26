import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import s from "./Navigation.module.scss";

const StyledNavLink = styled(NavLink)`
  font-size: 22px;
  padding: 10px 35px;
  border: 1px solid yellowgreen;
  color: yellowgreen;
  background-color: transparent;
  border-radius: 5px;
  text-decoration: none;

  &.active {
    background-color: #ffff0080;
    color: black;
  }
`;

const Navigation = () => {
  console.log("Navigation");
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink
            className={({ isActive }) =>
              clsx(s.navLink, isActive && s.activeLink)
            }
            // style={({ isActive }) =>
            //   ({color: isActive && "red", })
            // }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={s.navItem}>
          <StyledNavLink to="/todo">Todo</StyledNavLink>
        </li>
        <li className={s.navItem}>
          <NavLink
            className={({ isActive }) =>
              clsx(s.navLink, isActive && s.activeLink)
            }
            to="/news"
          >
            News
          </NavLink>
          {/* /country-news */}
        </li>
        <li className={s.navItem}>
          <NavLink
            className={({ isActive }) =>
              clsx(s.navLink, isActive && s.activeLink)
            }
            to="/country-news"
          >
            CountryNews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
