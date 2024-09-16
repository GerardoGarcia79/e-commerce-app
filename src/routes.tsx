import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ProductsGrid from "./Components/ProductsGrid";
import ShoppingCartPage from "./pages/ShoppingCartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <ProductsGrid /> },
      { path: "cart", element: <ShoppingCartPage /> },
    ],
  },
]);

export default router;
