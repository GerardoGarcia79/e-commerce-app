import { ReactNode, useEffect, useReducer } from "react";
import cartProductsReducer from "../reducers/cartProductsReducer";
import ProductCartContext from "./ProductCartContext";

interface Props {
  children: ReactNode;
}

const ProductCardProvider = ({ children }: Props) => {
  const [cartProducts, dispatch] = useReducer(
    cartProductsReducer,
    localStorage.getItem("cartProducts")
      ? JSON.parse(localStorage.getItem("cartProducts")!)
      : []
  );

  const findProductInCart = (id: number): boolean => {
    const index = cartProducts.findIndex((p) => p.id === id);
    return index >= 0;
  };

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

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
