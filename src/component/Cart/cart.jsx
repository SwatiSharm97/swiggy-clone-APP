import { useDispatch, useSelector } from "react-redux";
import { cleartCart } from "../../utils/store/cartSlice";
import MenuSubCards from "../Body/RestaurantData/MenuSubCards";
import themeContext from "../../utils/themeContext";
import { useContext } from "react";

const CartPage = () => {
  const dispatch = useDispatch();
  const theme = useContext(themeContext);
  const HandleCartClear = () => {
    dispatch(cleartCart());
  };
  const totalCartItem = useSelector((store) => store.cart.items);
  console.log("=====", totalCartItem);
  return (
    <>
      <div
        className={`flex justify-center w-full h-screen pt-4 ${
          theme.DefaultTheme === "light" ? "bg-white" : "bg-gray-950 "
        }`}
      >
        <div className="w-2/3">
          <button
            className="border bg-green-500 font-bold p-2 text-white rounded-lg"
            onClick={HandleCartClear}
          >
            clear cart
          </button>
          {totalCartItem.length === 0 ? (
            <div
              className={` ${
                theme.DefaultTheme === "light" ? "text-black" : "text-gray-200 "
              }`}
            >
            
              Cart is Empty ! Please Add to Cart
            </div>
          ) : (
            <div>
              {totalCartItem.map((item) => (
                <MenuSubCards key={item.id} subCategory={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default CartPage;
