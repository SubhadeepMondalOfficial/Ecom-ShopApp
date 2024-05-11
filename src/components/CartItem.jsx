import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(removeCartItem(item.id));
    toast.error("Item Removed from Cart");
  }

  return (
    <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500 mt-2 mb-2 md:mx-5 ">
      <div className="flex justify-between gap-x-6  p-3">
        <div className="w-[30%]">
          <img src={item.image} alt="Item Image" className="object-contain" />
        </div>
        <div>
          <h3 className="text-xl text-slate-700 font-semibold">{item.title}</h3>
          <p className="text-base text-slate-700">
            {item.description.substring(0, 100)}
          </p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg text-green-600">
              ${item.price}
            </span>
            <span
              className=" bg-red-200 group hover:bg-red-400 transition duration-300 cursor-pointer rounded-full p-2 mr-3"
              onClick={removeFromCart}
            >
              <MdDeleteForever className="text-red-800 group-hover:text-white text-lg" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
