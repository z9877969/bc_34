import PropTypes from "prop-types";
import s from "./Navigation.module.scss";

const Navigation = ({ handleSetActivePage }) => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <a
            href="/"
            className={s.navLink}
            onClick={(e) => {
              e.preventDefault();
              handleSetActivePage("shop");
            }}
          >
            Shop
          </a>
        </li>
        <li className={s.navItem}>
          <a
            href="/"
            className={s.navLink}
            onClick={(e) => {
              e.preventDefault();
              handleSetActivePage("todo");
            }}
          >
            Todo
          </a>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  handleSetActivePage: PropTypes.func.isRequired,
};

export default Navigation;
