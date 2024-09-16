import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

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

const useProducts = (endpoint: string) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    apiClient
      .get<FetchResponse>(endpoint)
      .then((res) => setProducts(res.data.products));
  }, [endpoint]);

  return { products };
};

export default useProducts;
