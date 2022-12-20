import axios from "axios";
axios.defaults.baseURL = "https://newsapi.org/v2";
axios.defaults.params = {
  page: 1,
  pageSize: 10,
  apiKey: "42ee593af8484a5a82756cb35b09ccd6",
};

// https://newsapi.org/v2/everything?q=bitcoin&apiKey=42ee593af8484a5a82756cb35b09ccd6
export const getSearchNews = (query, page = 1) => {
  return axios
    .get("/everything", {
      params: {
        q: query,
        page,
      },
    })
    .then(({ data }) => data);
};

// https://newsapi.org/v2/top-headlines?country=us&apiKey=42ee593af8484a5a82756cb35b09ccd6
export const getTopNews = () => {
  return axios
    .get("/top-headlines", {
      params: {
        //   q: query,
        country: "us",
      },
    })
    .then(({ data }) => data);
};
