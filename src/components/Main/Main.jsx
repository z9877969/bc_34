import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import products from "../../data/products.json";
import s from "./Main.module.scss";

const Main = () => {
  return (
    <div className={s.container}>
      <Filter />
      <ProductsList products={products} />
    </div>
  );
};

export default Main;
