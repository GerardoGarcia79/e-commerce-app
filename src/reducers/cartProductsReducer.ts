import { Product } from "../hooks/useProducts";

interface AddProduct {
  type: "ADD";
  product: Product;
}

interface DeleteProduct {
  type: "DELETE";
  productId: number;
}

interface EmptyCart {
  type: "RESET";
}

export type ProductAction = AddProduct | DeleteProduct | EmptyCart;

const cartProductsReducer = (
  cartProducts: Product[],
  action: ProductAction
): Product[] => {
  switch (action.type) {
    case "ADD":
      return [action.product, ...cartProducts];
    case "DELETE":
      return cartProducts.filter((product) => product.id !== action.productId);
    case "RESET":
      return (cartProducts = []);
  }
};

export default cartProductsReducer;
