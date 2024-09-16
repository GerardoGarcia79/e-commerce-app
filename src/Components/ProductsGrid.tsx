import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
  title: string;
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
    <ul>
      {products.map((p) => (
        <li>{p.title}</li>
      ))}
    </ul>
  );
};

export default ProductsGrid;
