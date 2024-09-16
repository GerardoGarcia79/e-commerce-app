import { Product } from "../hooks/useProducts";

interface AddProduct {
  type: "ADD";
  product: Product;
}

interface DeleteProduct {
  type: "DELETE";
  productId: number;
}

type ProductAction = AddProduct | DeleteProduct;

const cartProductsReducer = (
  cartProducts: Product[],
  action: ProductAction
): Product[] => {
  switch (action.type) {
    case "ADD":
      return [action.product, ...cartProducts];
    case "DELETE":
      return cartProducts.filter((product) => product.id !== action.productId);
  }
};

export default cartProductsReducer;
