import "./App.css";
import MainContainer from "./Components/MainContainer";
import NavBar from "./Components/NavBar";
import ProductsGrid from "./Components/ProductsGrid";

function App() {
  return (
    <MainContainer>
      <NavBar />
      <hr className="block h-[1px] border-0 border-b-[1px] border-solid border-gray-200 my-1" />
      <div className="my-5">
        <h1 className="text-3xl my-4">
          <span className="text-gray-400">ALL</span> PRODUCTS
        </h1>
        <ProductsGrid />
      </div>
    </MainContainer>
  );
}

export default App;
