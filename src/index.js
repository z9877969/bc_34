import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalStylesWrapper from "./components/GlobalStylesWrapper/GlobalStylesWrapper";
import "modern-normalize/modern-normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStylesWrapper>
      <App />
    </GlobalStylesWrapper>
  </React.StrictMode>
);
