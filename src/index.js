import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStylesWrapper from "./components/GlobalStylesWrapper/GlobalStylesWrapper";
import "modern-normalize/modern-normalize.css";
import FilterProvider from "./context/FilterContext";
import ModalProvider from "./context/ModalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ModalProvider>
    <FilterProvider>
      <GlobalStylesWrapper>
        <App />
      </GlobalStylesWrapper>
    </FilterProvider>
  </ModalProvider>
  // </React.StrictMode>
);
