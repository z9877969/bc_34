import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  const [activePage, setActivePage] = useState("todo");

  return (
    <>
      <Header handleSetActivePage={setActivePage} />
      <Main activePage={activePage} />
    </>
  );
};

export default App;
