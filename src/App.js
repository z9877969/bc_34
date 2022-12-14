import { Component } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import "./App.css";

class App extends Component {
  state = {
    // link-1 -> link-2
    isCartOpen: false,
    productsToCart: [],
  };

  handleToggleCart = () => {
    this.setState((prevState) => ({ isCartOpen: !prevState.isCartOpen }));
  };

  addToCart = (product) => {
    this.setState((prevState) => {
      const findedProduct = prevState.productsToCart.find(
        (el) => el.product.id === product.id
      );
      // console.log("findedProduct :>> ", findedProduct);
      // if (findedProduct) {
      //   findedProduct.amount += 1;
      //   return { productsToCart: prevState.productsToCart };
      // }
      // return {
      //   productsToCart: [...prevState.productsToCart, { product, amount: 1 }],
      // };
      return {
        productsToCart: findedProduct
          ? prevState.productsToCart.map((el) =>
              el.product.id === product.id
                ? { product, amount: findedProduct.amount + 1 }
                : el
            )
          : [...prevState.productsToCart, { product, amount: 1 }],
      };
    });
  };

  removeFromCart = (id) => {
    this.setState((prev) => ({
      productsToCart: prev.productsToCart.filter((el) => el.product.id !== id),
    }));
  };

  render() {
    console.log(this.props);
    return (
      <>
        <Header handleOpenCart={this.handleToggleCart} />
        {this.state.isCartOpen && (
          <Cart
            productsToCart={this.state.productsToCart}
            handleCloseCart={this.handleToggleCart}
            removeProduct={this.removeFromCart}
          />
        )}
        <Main addToCart={this.addToCart} />
      </>
    );
  }
}

export default App;

// [{product: {id: 1}, amount: 1}, {product: {id: 2}, amount: 2}]

// const o = {
//   a: 21,
// };

// const b = o;
// b.a = 54;

// o === b -> true

// const a = new App();

// console.log("a :>> ", a);
