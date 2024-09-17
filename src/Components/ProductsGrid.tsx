import useProducts from "../hooks/useProducts";
import useProductsContext from "../hooks/useProductsContext";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  const { products, isLoading, error } = useProducts("/products");
  const { cartProducts, findProductInCart, dispatch } = useProductsContext();

  if (error) return <p className="text-xl font-bold">{error}</p>;

  return (
    <>
      {isLoading ? (
        <p className="text-xl font-bold">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cartProducts={cartProducts}
              findProductInCart={findProductInCart}
              dispatch={dispatch}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsGrid;
