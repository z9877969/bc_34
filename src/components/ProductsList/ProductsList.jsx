import PropTypes from "prop-types";
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import { List } from "./ProductsList.styled";
import "./ProductsList.css";

const ProductsList = (props) => {
  const { products } = props;
  return (
    <List>
      {products.map((el, idx) => (
        <ProductsListItem
          key={el.id}
          url={el.url}
          model={el.model}
          price={el.price}
          currency={el.currency}
          isOdd={idx % 2 !== 0}
        >
          <h3>ItemTitle</h3>
        </ProductsListItem>
      ))}
    </List>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsList;

// const SectionWrapper = ({ title, children }) => {
//   return (
//     <section>
//       <div className="container">
//         {title && <h2>{title}</h2>}
//         {children}
//       </div>
//     </section>
//   );
// };
{/* <SectionWrapper>
  <ul>
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
  </ul>
</SectionWrapper>; */}
{
  /* <SectionWrapper />
<SectionWrapper />
<SectionWrapper />
<SectionWrapper /> */
}

{/* <section>
  <div className="container">
    <h2></h2>
  </div>
</section>; */}
