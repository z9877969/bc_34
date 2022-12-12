import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import products from "../../data/products.json";
import "./Main.css";

console.log("products :>> ", products);

const Main = () => {
  // fetch
  return (
    <div className="container">
      <Filter />
      <ProductsList products={products} />
    </div>
  );
};

export default Main;
