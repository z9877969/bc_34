import PropTypes from "prop-types";
import s from "./Header.module.css";
import logo from "../../assets/img/logo.png";
import sprite from "../../assets/icons/sprite.svg";
import Navigation from "../Navigation/Navigation";

const Header = ({ productsAmount, handleOpenCart, handleSetActivePage }) => {
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
      <div className={s.cartInfo}>
        <button type="button" className={s.btnCart} onClick={handleOpenCart}>
          <svg>
            <use href={sprite + "#icon-cart"}></use>
          </svg>
          <span className={s.productsQuantity}>{productsAmount}</span>
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  productsAmount: PropTypes.number.isRequired,
  handleOpenCart: PropTypes.func.isRequired,
  handleSetActivePage: PropTypes.func.isRequired,
};

export default Header;
