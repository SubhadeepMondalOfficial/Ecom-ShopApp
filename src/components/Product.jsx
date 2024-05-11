import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

export const Product = ({ item }) => {
  const { cartItemCount } = useSelector((state) => state);
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(addCartItem(item));
    toast.success("Item Added to Cart");
  }
  function removeFromCart() {
    dispatch(removeCartItem(item));
    toast.error("Item Removed from Cart");
  }

  return (
    <div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5 rounded-xl">
      <div className="w-[250px] flex flex-col justify-between items-center gap-3 px-4 py-3">
        <p className="truncate text-xl text-gray-700 font-semibold w-40">
          {item.title.substring(0, 20)}...
        </p>
        <p className="text-xs w-40 text-gray-400 font-normal text-left">
          {item.description.substring(0, 50)}...
        </p>
        <div className=" h-[200px] my-3">
          <img
            src={item.image}
            alt=""
            loading="lazy"
            className="overflow-hidden object-contain w-full h-full"
          />
        </div>

        <div className="flex justify-between items-center w-full">
          <span className="text-xl text-green-600 font-semibold">
            ${item.price}
          </span>
          {cartItemCount.some((cartItem) => item.id == cartItem.id) ? (
            <button
              className="hover:bg-gray-700 hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
              onClick={removeFromCart}
            >
              REMOVE ITEM
            </button>
          ) : (
            <button
              className="hover:bg-gray-700 hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
              onClick={addToCart}
            >
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
