import { Component } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";

class App extends Component {
  state = {
    isCartOpen: false,
    productsToCart: [],
    activePage: "todo",
  };

  handleSetActivePage = (activePage) => {
    this.setState({ activePage });
  };

  handleToggleCart = () => {
    this.setState((prevState) => ({ isCartOpen: !prevState.isCartOpen }));
  };

  addToCart = (product) => {
    this.setState((prevState) => {
      const findedProduct = prevState.productsToCart.find(
        (el) => el.product.id === product.id
      );

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
    const { activePage, isCartOpen, productsToCart } = this.state;
    return (
      <>
        <Header
          productsAmount={productsToCart.length}
          handleOpenCart={this.handleToggleCart}
          handleSetActivePage={this.handleSetActivePage}
        />
        <Main activePage={activePage} addToCart={this.addToCart} />
        {isCartOpen && (
          <Cart
            productsToCart={this.state.productsToCart}
            handleCloseCart={this.handleToggleCart}
            removeProduct={this.removeFromCart}
          />
        )}
      </>
    );
  }
}

export default App;
