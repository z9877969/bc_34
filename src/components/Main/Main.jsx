import { Component } from "react";
import TodoPage from "../TodoPage/TodoPage";

class Main extends Component {
  state = {
    isOpen: false,
  };
  render() {
    const { isOpen } = this.state;
    const { activePage } = this.props;
    return (
      <main>
        {activePage === "home" && <h1>Welcome to our Amazing App</h1>}
        {activePage === "todo" && <TodoPage isOpen={isOpen} />}
      </main>
    );
  }
}

export default Main;
