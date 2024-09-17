import logo from "../assets/logo.png";
import cart from "../assets/cart_icon.png";
import profile from "../assets/profile_icon.png";
import useProductsContext from "../hooks/useProductsContext";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const { cartProducts } = useProductsContext();

  return (
    <div className="flex flex-col md:flex-row items-center py-2 md:justify-between">
      <Link to="/">
        <img
          src={logo}
          alt="Forever logo"
          className="w-48 h-16  md:w-40 md:h-12 "
        />
      </Link>
      <ul className="md:flex md:flex-row text-3xl md:text-xl mb-2">
        <li className="mb-1 mr-4 decoration-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active underline underline-offset-2 decoration-2" : ""
            }
          >
            HOME
          </NavLink>
        </li>
        <li className="mb-1 mr-4 decoration-2">
          <NavLink to="/">COLLECTION</NavLink>
        </li>
        <li className="mb-1 mr-4 decoration-2">
          <NavLink to="/">ABOUT</NavLink>
        </li>
        <li className="mb-1 mr-4 decoration-2">
          <NavLink to="/">CONTACT</NavLink>
        </li>
      </ul>
      <div className="flex relative">
        <Link to="/">
          <img src={profile} className="w-8 md:w-6 mr-20 md:mr-3 " />
        </Link>
        <Link to="/cart">
          <img src={cart} className="w-8 md:w-6" />
        </Link>
        <span className="flex justify-center items-center absolute -right-[2px] -bottom-[2px] text-[12px] w-4 rounded-full bg-black text-white">
          {cartProducts.length}
        </span>
      </div>
    </div>
  );
};

export default NavBar;
