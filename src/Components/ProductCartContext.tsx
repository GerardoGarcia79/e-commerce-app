import { Dispatch } from "react";
import { Product } from "../hooks/useProducts";
import { ProductAction } from "../reducers/cartProductsReducer";
import React from "react";

interface ProductCartContextType {
  cartProducts: Product[];
  dispatch: Dispatch<ProductAction>;
  findProductInCart: (id: number) => boolean;
}

const ProductCartContext = React.createContext<ProductCartContextType>(
  {} as ProductCartContextType
);

export default ProductCartContext;
