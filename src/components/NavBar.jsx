import { NavLink } from "react-router-dom";
import NavLogo from "../assets/Ecom-logo.png";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const { cartItemCount } = useSelector((state) => state);
  console.log(cartItemCount);

  return (
    <div className="bg-blue-950 text-white sticky top-0 left-0 z-20 w-full">
      <div className="max-w-[1280px] m-auto flex justify-between px-3">
        <NavLink to={"/"} className="flex justify-center items-center gap-1">
          <img src={NavLogo} alt="Web Branding Logo" width={50} />
          <p>E-Com Lifestyle</p>
        </NavLink>

        <div className="flex justify-center items-center gap-10">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/cart"} className="relative">
            {cartItemCount.length > 0 ? (
              <div>
                <h2 className="absolute bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
                  {cartItemCount.length}
                </h2>
                <MdShoppingCart className="text-yellow-400 text-2xl" />
              </div>
            ) : (
              <MdShoppingCart className="text-yellow-400 text-2xl" />
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};
