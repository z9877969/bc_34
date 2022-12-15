import { Component } from "react";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import products from "../../data/products.json";
import Container from "../Container/Container";

class ShopPage extends Component {
  state = {
    products,
    productsFilter: [],
  };

  handleFilterChange = (e) => {
    const { checked, value } = e.target;

    this.setState((prev) => ({
      productsFilter: checked
        ? [...prev.productsFilter, value]
        : prev.productsFilter.filter((el) => el !== value),
    }));
  };

  filterProducts = () => {
    const { productsFilter, products } = this.state;
    if (!productsFilter.length) return products;
    return products.filter((el) => productsFilter.includes(el.type));
  };

  render() {
    const { productsFilter } = this.state;
    const { addToCart } = this.props;

    const products = this.filterProducts();

    return (
      <Container display="flex" jc="center">
        <Filter
          productsFilter={productsFilter}
          handleFilterChange={this.handleFilterChange}
        />
        <ProductsList products={products} addToCart={addToCart} />
      </Container>
    );
  }
}

export default ShopPage;
