import { useContext } from "react";
import ProductCartContext from "../Components/ProductCartContext";

const useProductsContext = () => useContext(ProductCartContext);

export default useProductsContext;
