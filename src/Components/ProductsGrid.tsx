import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export interface Product {
  title: string;
  id: number;
  description: string;
  image: string;
  price: number;
}

interface FetchResponse {
  products: Product[];
  message: string;
}

const ProductsGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get<FetchResponse>("https://fakestoreapi.in/api/products")
      .then((res) => setProducts(res.data.products));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
