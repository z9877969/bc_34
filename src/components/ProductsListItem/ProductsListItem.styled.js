import styled from "styled-components";

export const Item = styled.li`
  border: 3px solid
    ${({ isOdd, theme }) => {
      return isOdd ? theme.borderOdd : theme.borderEven;
    }};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 5px;
  background-color: #212121;
  overflow: hidden;

  &:last-child {
    background-color: blue;
  }
`;

export const SaleMarker = styled.p`
  display: none;
  position: absolute;
  right: -28px;
  top: -8px;
  transform: rotate(45deg);
  width: 100px;
  text-align: center;
  font-size: 20px;
  background-color: yellow;
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  background-color: #fff;

  & img {
    display: block;
    width: 100%;
  }
`;

export const DescrWrapper = styled.div`
  padding: 10px;
  color: bisque;
`;

const ProductsDescr = styled.span`
  font-size: 16px;
  line-height: 1.2;
  color: beige;
`;

export const Price = styled(ProductsDescr)`
  color: green;
`;

export const Currerncy = styled(ProductsDescr)`
  font-weight: bold;
`;

export const NotProductDescr = styled(ProductsDescr)`
  color: red;
  font-weight: bold;
`;

export const BtnBuy = styled.button`
  font-size: 24px;
  padding: 10px 20px;
  border: none;
  background-color: burlywood;
  color: rgb(58, 44, 44);
  border-radius: 3px;

  &:active {
    transform: scale(0.95);
  }
`;
