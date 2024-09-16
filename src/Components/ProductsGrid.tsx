import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  const { products } = useProducts("/products");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
