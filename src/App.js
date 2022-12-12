// import React, { createElement, Fragment } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";

// const item = <li>link</li>;
// const items = [1, 2, 3].map((el) => <li>link</li>);

// const container = createElement(
//   "div",
//   null,
//   // createElement("header", null, createElement("ul", null, items))
//   // createElement("header", null, <ul>{items}</ul>)
//   <header>
//     <ul>{items}</ul>
//   </header>
// );

// const MainTitle = (props) => {
//   console.log(props);
//   return <h1>{props.title}</h1>;
// };

// const fn = () =>

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
