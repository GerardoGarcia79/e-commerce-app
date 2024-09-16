import { Product } from "../hooks/useProducts";
import ExpandibleText from "./ExpandibleText";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  // const { cartProducts } = useProductsContext();
  // console.log(cartProducts);

  // FIXME: useProductsContext is execute 50 (1 for each card) so call Context in parent and pass the states via props
  // TODO: Create a function that return boolean if the current product is in cartProducts state
  // TODO: Create a function that take boolean of the previous function, true: call DELETE option of dispatch, false: call ADD option of dispatch
  // Implement the 2 previous function in Onclick in the button for add/delete shopping cart
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
        <p className="mt-2">Price: $ {product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
