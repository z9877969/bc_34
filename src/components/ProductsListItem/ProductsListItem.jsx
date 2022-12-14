import PropTypes from "prop-types";
import {
  BtnBuy,
  Currerncy,
  DescrWrapper,
  ImageWrapper,
  Item,
  NotProductDescr,
  Price,
  SaleMarker,
} from "./ProductsListItem.styled";

const ProductsListItem = ({ url, model, price, currency, id, addToCart }) => {
  const handleBtnClick = (e) => {
    addToCart({ url, model, price, currency, id });
  };

  return (
    <Item>
      <ImageWrapper>
        <SaleMarker>Акція</SaleMarker>
        <img src={url} alt={model} />
      </ImageWrapper>
      <div>
        <DescrWrapper>
          <h3 className="products__model">{model}</h3>
          {price ? (
            <>
              <Price>{price}</Price>
              <Currerncy>{currency}</Currerncy>
            </>
          ) : (
            <NotProductDescr>Товар відсутній</NotProductDescr>
          )}
        </DescrWrapper>
        <BtnBuy type="button" onClick={handleBtnClick}>
          Купити
        </BtnBuy>
      </div>
    </Item>
  );
};

ProductsListItem.propTypes = {
  url: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  currency: PropTypes.string.isRequired,
};

export default ProductsListItem;
