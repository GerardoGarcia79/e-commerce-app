import ProductsCartGrid from "../Components/ProductsCartGrid";
import useProductsContext from "../hooks/useProductsContext";

const ShoppingCartPage = () => {
  const { cartProducts } = useProductsContext();
  const subtotal = cartProducts.reduce((acc, cur) => acc + cur.price, 0);
  const shippingFee = 10;
  const total = subtotal + shippingFee;

  if (cartProducts.length <= 0)
    return (
      <h1 className="font-bold text-2xl">
        Cart is empty, please add a product to cart to see it here!
      </h1>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div>
        <ProductsCartGrid />
      </div>
      <div className="md:fixed md:top-1/3 md:right-1/4">
        <h2 className="font-semibold text-2xl">
          <span className="text-gray-400">CART</span> TOTALS
        </h2>
        <div className="flex justify-between text-lg py-3 border-b-2 border-gray-200">
          <p className="mr-48">Subtotal</p>
          <p>$ {subtotal}.00</p>
        </div>
        <div className="flex justify-between text-lg py-3 border-b-2 border-gray-200">
          <p>Shipping Fee</p>
          <p>$ {shippingFee}.00</p>
        </div>
        <div className="flex justify-between text-lg py-3 font-bold">
          <p>Total</p>
          <p>$ {total}.00</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
