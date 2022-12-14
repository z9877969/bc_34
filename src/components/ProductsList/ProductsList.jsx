import PropTypes from "prop-types";
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import { List } from "./ProductsList.styled";

const ProductsList = (props) => {
  const { products, addToCart } = props;
  return (
    <List>
      {products.map((el, idx) => (
        <ProductsListItem
          key={el.id}
          {...el}
          // url={el.url}
          // model={el.model}
          // price={el.price}
          // currency={el.currency}
          // id={el.id}
          addToCart={addToCart}
        />
      ))}
    </List>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsList;
