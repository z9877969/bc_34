import HomePage from "../HomePage/HomePage";
import TodoPage from "../TodoPage/TodoPage";

const Main = ({ activePage }) => {
  return (
    <main>
      {activePage === "home" && <HomePage />}
      {activePage === "todo" && <TodoPage />}
    </main>
  );
};

export default Main;
