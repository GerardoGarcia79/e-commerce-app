import { Outlet } from "react-router-dom";
import MainContainer from "../Components/MainContainer";
import NavBar from "../Components/NavBar";
import ProductCartProvider from "../Components/ProductCartProvider";

const Layout = () => {
  return (
    <MainContainer>
      <ProductCartProvider>
        <NavBar />
        <hr className="block h-[1px] border-0 border-b-[1px] border-solid border-gray-200 my-1" />
        <div className="my-5">
          <h1 className="text-3xl my-4">
            <span className="text-gray-400">ALL</span> PRODUCTS
          </h1>
          <Outlet />
        </div>
      </ProductCartProvider>
    </MainContainer>
  );
};

export default Layout;
