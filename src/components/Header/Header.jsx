import s from "./Header.module.css";
import logo from "../../assets/img/logo.png";
import sprite from "../../assets/icons/sprite.svg";

const Header = ({ handleOpenCart }) => {
  return (
    <header className={s.container}>
      <a href="http://">
        <img src={logo} alt="" className={s.logo} />
      </a>
      <div className={s.userInfo}>
        <span className={s.userName}>B</span>
        <span className={s.userEmail}>user@mail.com</span>
      </div>
      <div className={s.cartInfo}>
        <button type="button" className={s.btnCart} onClick={handleOpenCart}>
          <svg>
            <use href={sprite + "#icon-cart"}></use>
          </svg>
          <span className={s.productsQuantity}>0</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
