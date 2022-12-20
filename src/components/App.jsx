import SearchBar from "./SearchBar/SearchBar";
import NewsPage from "./NewsPage/NewsPage";
import { Component } from "react";
// import Modal from "../components/Modal/Modal";

class App extends Component {
  state = { search: "",  };

  changeSearch = (search) => {
    this.setState({ search });
  };

  render() {
    return (
      <div className="App">
        <SearchBar changeSearch={this.changeSearch} />

        <NewsPage search={this.state.search} />
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
