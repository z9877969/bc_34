import PropTypes from "prop-types";
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import "./ProductsList.css";

const ProductsList = (props) => {
  const { products } = props;
  return (
    <ul className="products">
      {products.map((el) => (
        <ProductsListItem
          key={el.id}
          url={el.url}
          model={el.model}
          price={el.price}
          currency={el.currency}
        />
        // <li key={el.id} className="products__item">
        //   <div className="products__image-wrapper">
        //     <p className="products__sale">Акція</p>
        //     <img className="products__image" src={el.url} alt={el.model} />
        //   </div>
        //   <div className="products__descr">
        //     <h3 className="products__model">{el.model}</h3>
        //     {el.price ? (
        //       <>
        //         <span className="products__price">{el.price}</span>
        //         <span className="products__currency">{el.currency}</span>
        //       </>
        //     ) : (
        //       <span className="products__currency">Товар відсутній</span>
        //     )}
        //   </div>
        //   <button className="products__btn-buy" type="button">
        //     Купити
        //   </button>
        // </li>
      ))}
    </ul>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsList;
