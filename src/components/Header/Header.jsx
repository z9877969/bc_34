import PropTypes from "prop-types";
import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";
import logo from "../../assets/img/logo.png";

const Header = ({ handleSetActivePage }) => {
  return (
    <header className={s.container}>
      <a href="http://">
        <img src={logo} alt="" className={s.logo} />
      </a>
      <Navigation handleSetActivePage={handleSetActivePage} />
      <div className={s.userInfo}>
        <span className={s.userName}>B</span>
        <span className={s.userEmail}>user@mail.com</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  handleSetActivePage: PropTypes.func.isRequired,
};

export default Header;
