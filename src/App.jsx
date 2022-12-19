import { Component } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

class App extends Component {
  state = {
    activePage: "todo",
  };

  handleSetActivePage = (activePage) => {
    this.setState({ activePage });
  };

  render() {
    const { activePage } = this.state;
    return (
      <>
        <Header handleSetActivePage={this.handleSetActivePage} />
        <Main activePage={activePage} addToCart={this.addToCart} />
      </>
    );
  }
}

export default App;
