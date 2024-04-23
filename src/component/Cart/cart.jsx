import { useDispatch, useSelector } from "react-redux";
import { cleartCart } from "../../utils/store/cartSlice";
import MenuSubCards from "../Body/RestaurantData/MenuSubCards";

const CartPage = () => {
  const dispatch = useDispatch();
  const HandleCartClear = () => {
    dispatch(cleartCart());
  };
  const totalCartItem = useSelector((store) => store.cart.items);
  console.log("=====", totalCartItem);
  return (
    <>
      <div className="flex justify-center">
        <div className="w-2/3">
          <button
            className="border bg-green-500 font-bold p-2 text-white rounded-lg"
            onClick={HandleCartClear}
          >
            clear cart
          </button>
          {totalCartItem.length === 0 ? (
            <div> Cart is Empty ! Please Add to Cart</div>
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
