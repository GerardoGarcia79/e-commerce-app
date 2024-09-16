import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

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
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchResponse>(endpoint, { signal: controller.signal })
      .then((res) => {
        setProducts(res.data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [endpoint]);

  return { products, error, isLoading };
};

export default useProducts;
