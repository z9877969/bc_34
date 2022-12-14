import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import products from "../../data/products.json";
import s from "./Main.module.scss";
import { Component } from "react";

class Main extends Component {
  state = {
    products: products,
  };

  render() {
    const { addToCart } = this.props;
    const { products } = this.state;

    return (
      <main className={s.container}>
        <Filter />
        <ProductsList products={products} addToCart={addToCart} />
      </main>
    );
  }
}

export default Main;
