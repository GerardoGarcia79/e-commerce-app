import { ReactNode, useReducer } from "react";
import cartProductsReducer from "../reducers/cartProductsReducer";
import ProductCartContext from "./ProductCartContext";

interface Props {
  children: ReactNode;
}

const ProductCardProvider = ({ children }: Props) => {
  const [cartProducts, dispatch] = useReducer(cartProductsReducer, []);

  const findProductInCart = (id: number): boolean => {
    const index = cartProducts.findIndex((p) => p.id === id);
    return index >= 0;
  };

  console.log(cartProducts);

  return (
    <ProductCartContext.Provider
      value={{
        cartProducts,
        dispatch,
        findProductInCart,
      }}
    >
      {children}
    </ProductCartContext.Provider>
  );
};

export default ProductCardProvider;
