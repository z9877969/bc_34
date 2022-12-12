import PropTypes from "prop-types";


const ProductsListItem = (props) => {
  return (
    <li className="products__item">
      <div className="products__image-wrapper">
        <p className="products__sale">Акція</p>
        <img className="products__image" src={props.url} alt={props.model} />
      </div>
      <div className="products__descr">
        <h3 className="products__model">{props.model}</h3>
        {props.price ? (
          <>
            <span className="products__price">{props.price}</span>
            <span className="products__currency">{props.currency}</span>
          </>
        ) : (
          <span className="products__currency">Товар відсутній</span>
        )}
      </div>
      <button className="products__btn-buy" type="button">
        Купити
      </button>
    </li>
  );
};

ProductsListItem.propTypes = {
  url: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  currency: PropTypes.string.isRequired,
};

export default ProductsListItem;
