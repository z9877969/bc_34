import sprite from "../../assets/icons/sprite.svg";
import "./Cart.css";

const Cart = ({ productsToCart, handleCloseCart, removeProduct }) => {
  return (
    <div className="cart">
      <button
        className="cart-btn-close"
        type="button"
        onClick={handleCloseCart}
      >
        <svg className="cart-icon-close">
          <use href={sprite + "#icon-cross"}></use>
        </svg>
      </button>
      <ul className="cart-products">
        {productsToCart.map(
          ({ product: { model, price, currency, url, id }, amount }) => (
            <li key={id} className="cart-product">
              <img className="cart-image" src={url} alt="" />
              <div className="cart-descr">
                <h3 className="cart-model">{model}</h3>
                <span className="cart-price">{price}</span>
                <span className="cart-currency">{currency}</span>
              </div>
              <button>-</button>
              <p>{amount}</p>
              <button>+</button>

              <button
                className="cart-btn-remove"
                type="button"
                onClick={(e) => removeProduct(id)}
              >
                <svg className="cart-icon-remove">
                  <use href={sprite + "#icon-bin2"}></use>
                </svg>
              </button>
            </li>
          )
        )}
      </ul>
      <button className="cart-btn-order" type="button">
        Submit
      </button>
    </div>
  );
};

export default Cart;
