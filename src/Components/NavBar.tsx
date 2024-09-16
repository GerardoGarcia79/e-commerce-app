import logo from "../assets/logo.png";
import cart from "../assets/cart_icon.png";
import profile from "../assets/profile_icon.png";

const NavBar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center py-2 md:justify-between">
      <img
        src={logo}
        alt="Forever logo"
        className="w-48 h-16  md:w-40 md:h-12 "
      />
      <ul className="md:flex md:flex-row text-3xl md:text-xl mb-2">
        <li className="mb-1 mr-4">HOME</li>
        <li className="mb-1 mr-4">COLLECTION</li>
        <li className="mb-1 mr-4">ABOUT</li>
        <li className="mb-1">CONTACT</li>
      </ul>
      <div className="flex relative">
        <img src={profile} className="w-8 md:w-6 mr-20 md:mr-3 " />
        <img src={cart} className="w-8 md:w-6" />
        <span className="flex justify-center items-center absolute -right-[2px] -bottom-[2px] text-[12px] w-4 rounded-full bg-black text-white">
          0
        </span>
      </div>
    </div>
  );
};

export default NavBar;
