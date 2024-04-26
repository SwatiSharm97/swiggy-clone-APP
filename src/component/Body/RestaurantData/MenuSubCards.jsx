import PropTypes from "prop-types";
import { CDN_url } from "../../../utils/urls";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../utils/store/cartSlice";
import { useState } from "react";
import themeContext from "../../../utils/themeContext";
import { useContext } from "react";

const MenuSubCards = ({ subCategory }) => {
  const [showButton, setShowbutton] = useState(false);
  const items = useSelector((store) => store.cart.filteredItem);
  const { name, price, defaultPrice, description, imageId } = subCategory;
  const dispatch = useDispatch();
  const theme = useContext(themeContext);

  const HandleAddItem = () => {
    setShowbutton(true);
  };

  return (
    <>
      <div className="flex flex-row justify-between pb-8 pt-4">
        <div className="flex flex-col gap-4 ">
          <span>
            <p
              className={`${
                theme.DefaultTheme === "light"
                  ? "text-gray-700"
                  : "text-gray-200"
              } `}
            >
              {name}
            </p>
            <p className={`${
                theme.DefaultTheme === "light"
                  ? "text-gray-700"
                  : "text-gray-200"
              } `}>
              ₹{price / 100 ? price / 100 : defaultPrice / 100}
            </p>
            <p></p>
          </span>
          <span>
            <p className="text-sm text-slate-400">{description}</p>
          </span>
        </div>
        <div className="">
          <div className="absolute h-2">
            <button
              className="border rounded px-4 py-1 shadow-lg mx-6 my-20 bg-white "
              onClick={() => HandleAddItem()}
            >
              {showButton ? (
                <span>
                  <span>-</span>
                  {items.length}
                  <span onClick={() => dispatch(addItem(subCategory))}>+</span>
                </span>
              ) : (
                <span onClick={() => dispatch(addItem(subCategory))}>Add</span>
              )}
            </button>
          </div>
          <img
            src={CDN_url + imageId}
            className="w-[120px] h-[100px] border rounded-lg"
          ></img>
        </div>
      </div>
    </>
  );
};

MenuSubCards.propTypes = {
  subCategory: PropTypes.object.isRequired,
};

export default MenuSubCards;
