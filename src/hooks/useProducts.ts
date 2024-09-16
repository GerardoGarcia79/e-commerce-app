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
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchResponse>(endpoint)
      .then((res) => {
        setProducts(res.data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [endpoint]);

  return { products, error, isLoading };
};

export default useProducts;
