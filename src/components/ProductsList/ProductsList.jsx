import PropTypes from "prop-types";
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import { List } from "./ProductsList.styled";

const ProductsList = (props) => {
  const { products, addToCart } = props;
  return (
    <List>
      {products.map((el, idx) => (
        <ProductsListItem key={el.id} {...el} addToCart={addToCart} />
      ))}
    </List>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductsList;
