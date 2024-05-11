import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import { useEffect, useState } from "react";

export const CartPage = () => {
  const { cartItemCount } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  console.log("cartItemCount in CartPage =>");
  console.log(cartItemCount);

  useEffect(() => {
    let startCount = 0;
    cartItemCount.forEach((item) => (startCount += item.price));
    setTotalAmount(startCount);
  }, [cartItemCount]);
  console.log("totalAmount => ", totalAmount);

  return (
    <div className="max-w-[1280px] m-auto">
      {cartItemCount.length > 0 ? (
        <div className="lg:flex justify-between w-full">
          <div className="lg:w-[60%]">
            {cartItemCount.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="flex flex-col lg:w-[35%] mt-5">
            <div className="flex flex-col justify-between p-5 my-14 h-full">
              <div className="flex flex-col gap-5">
                <span className="font-bold text-xl text-green-800 tracking-widest">
                  YOUR CART
                </span>
                <span className="font-bold text-5xl text-green-700 -mt-5">
                  SUMMARY
                </span>
                <span className="text-gray-700 font-bold text-xl">
                  Total Item: {cartItemCount.length}
                </span>
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-gray-700 font-semibold text-xl">
                  Total Amount:{" "}
                  <span className="font-bold">${totalAmount.toFixed(2)}</span>
                </span>
                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <p className="text-gray-700 font-bold text-xl mb-2">
            Your Cart is empty!
          </p>
          <NavLink
            to={"/"}
            className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider"
          >
            Shop Now
          </NavLink>
        </div>
      )}
    </div>
  );
};
