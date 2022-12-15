import ShopPage from "../ShopPage/ShopPage";
import TodoPage from "../TodoPage/TodoPage";

const Main = ({ addToCart, activePage }) => {
  return (
    <main>
      {activePage === "shop" && <ShopPage addToCart={addToCart} />}
      {activePage === "todo" && <TodoPage />}
    </main>
  );
};

export default Main;
