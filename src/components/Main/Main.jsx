import TodoPage from "../TodoPage/TodoPage";

const Main = ({ activePage }) => {
  return (
    <main>
      {activePage === "home" && <h1>Welcome to our Amazing App</h1>}
      {activePage === "todo" && <TodoPage />}
    </main>
  );
};

export default Main;
