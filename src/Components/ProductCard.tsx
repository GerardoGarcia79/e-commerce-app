import { Product } from "../hooks/useProducts";
import { ProductAction } from "../reducers/cartProductsReducer";
import ExpandibleText from "./ExpandibleText";

interface Props {
  product: Product;
  cartProducts: Product[];
  findProductInCart: (id: number) => boolean;
  dispatch: React.Dispatch<ProductAction>;
}

const ProductCard = ({
  product,
  findProductInCart,
  dispatch,
  cartProducts,
}: Props) => {
  // Save the cartProducts in LocalStorage and share functions to know if the current product is in cartProducts to ShoppingCartPage to render correct button 'DELETE'

  return (
    <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
      <div className="flex justify-center relative">
        <span></span>
        <img src={product.image} className="w-[250px] object-contain" />
      </div>
      <div className="p-2">
        <ExpandibleText text={product.title} maxLength={55} font="bold" />
        <ExpandibleText text={product.description} maxLength={100} />
        <div className="flex">
          <p className="mt-2 text-lg">Price: $ {product.price}</p>
          <button
            onClick={() => {
              const isInCart = findProductInCart(product.id);
              return isInCart
                ? dispatch({ type: "DELETE", productId: product.id })
                : dispatch({ type: "ADD", product: product });
            }}
            className="w-48 rounded-full p-2 text-base bg-yellow-400 hover:bg-yellow-300 ml-4"
          >
            {cartProducts.find((p) => p.id === product.id)
              ? "Delete from cart"
              : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
