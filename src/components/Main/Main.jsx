import { Component } from "react";
import TodoPage from "../TodoPage/TodoPage";

class Main extends Component {
  state = {
    isOpen: false,
    color: "white",
  };
  render() {
    const { color, isOpen } = this.state;
    const { activePage } = this.props;
    return (
      <main style={{ backgroundColor: color }}>
        <button
          type="button"
          onClick={() =>
            this.setState((prev) => ({
              color: prev.color === "red" ? "white" : "red",
            }))
          }
        >
          Change BG
        </button>
        <button
          type="button"
          onClick={() => this.setState((prev) => ({ isOpen: !prev.isOpen }))}
        >
          Click
        </button>
        {activePage === "home" && <h1>Welcome to our Amazing App</h1>}
        {activePage === "todo" && <TodoPage isOpen={isOpen} />}
      </main>
    );
  }
}

export default Main;
