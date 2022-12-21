import { Component } from "react";
import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
import Modal from "../Modal/Modal";
// import news from "../../data/news.json";
import { getSearchNews, getTopNews } from "../../utils/searchApi";

class NewsPage extends Component {
  state = {
    news: [], // -> news
    page: 1,
    search: "",
    isLoading: false,
    error: null, // -> {}
    // isModalOpen: false,
    modalData: null, // {} -> true
  };

  // async componentDidUpdate(prevProps, prevState) {
  //   if (this.props.search !== prevProps.search) {
  //     // console.log("fetch -> ", this.props.search);
  //     const response = await getSearchNews();
  //     console.log(response);
  //   }
  // }

  // async componentDidMount() {
  //   // fetch()
  //   try {
  //     const data = await getTopNews(); // data | error
  //     this.setState({ news: data.articles });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.search !== nextProps.search) {
      return { page: 1, search: nextProps.search };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      (this.props.search !== prevProps.search && this.props.search !== "") ||
      this.state.page !== prevState.page
    ) {
      this.getSearchNews(); // search & page = 1
    }
    // if (this.state.page !== prevState.page && this.state.page !== 1) {
    //   this.getSearchNews();
    // }
  }

  getSearchNews = () => {
    if (this.state.error) {
      this.setState({ error: null });
    }
    this.setState({ isLoading: true });
    getSearchNews(this.props.search, this.state.page)
      .then((data) =>
        this.setState((prev) => ({
          news:
            this.state.page === 1
              ? data.articles
              : [...prev.news, ...data.articles],
        }))
      )
      .catch((err) => this.setState({ error: err }))
      .finally(() => this.setState({ isLoading: false }));
  };

  changePage = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  setModalData = (data = null) => {
    this.setState({ modalData: data });
  };

  render() {
    // console.log(this.props);
    const { news, isLoading, error, modalData } = this.state;
    if (error) {
      return <h1>{error.message}</h1>;
    }
    return (
      <>
        {news.length > 0 && (
          <NewsList news={news} setModalData={this.setModalData} />
        )}
        {isLoading && <h1>Loading...</h1>}

        {news.length > 0 && <Button cbOnClick={this.changePage} />}
        {modalData && (
          <Modal modalData={modalData} setModalData={this.setModalData} />
        )}
      </>
    );
  }
}

export default NewsPage;
