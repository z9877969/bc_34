import { Component } from "react";
import s from "./SearchBar.module.scss";
// = ({ changeSearch }) =>
class SearchBar extends Component {
  state = {
    input: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.changeSearch(this.state.input.trim());
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <input
          className={s.input}
          type="text"
          value={this.state.input}
          placeholder="Search..."
          onChange={(e) => this.setState({ input: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SearchBar;
