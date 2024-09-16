import { ReactNode, useReducer, useState } from "react";
import cartProductsReducer from "../reducers/cartProductsReducer";
import ProductCartContext from "./ProductCartContext";

interface Props {
  children: ReactNode;
}

const ProductCardProvider = ({ children }: Props) => {
  const [cartProducts, dispatch] = useReducer(cartProductsReducer, []);
  const [isInCart, setIsInCart] = useState(false);

  return (
    <ProductCartContext.Provider
      value={{ cartProducts, dispatch, isInCart, setIsInCart }}
    >
      {children}
    </ProductCartContext.Provider>
  );
};

export default ProductCardProvider;
