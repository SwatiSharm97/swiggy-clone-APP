import PropTypes from "prop-types";
// import { useContext, useState } from "react";
import MenuSubCards from "./MenuSubCards";
import { useState } from "react";
import themeContext from "../../../utils/themeContext";
import { useContext } from "react";

const MenuCards = ({ category,showItems,setShowIndex }) => {
  // const [showIndex, setShowIndex] = useState(false);
  const theme = useContext(themeContext);
  // const HandleClick = () => {
  //   setShowIndex(!showIndex);
  // };

  return (
    <div>
      <div
        className="flex flex-row justify-between pt-4 pb-4 cursor-pointer"
        onClick={()=>{setShowIndex()}}
      >
        <span
          className={` text-xl font-bold ${
            theme.DefaultTheme === "light" ? "text-gray-800" : "text-gray-300"
          } `}
        >
          {category.title}({category?.itemCards?.length})
        </span>
        {showItems ? (
          <span
            className={`text-2xl ${
              theme.DefaultTheme === "light" ? "text-gray-800" : "text-gray-300"
            } `}
          >
            &#8964;
          </span>
        ) : (
          <span
            className={`text-2xl ${
              theme.DefaultTheme === "light" ? "text-gray-800" : "text-gray-300"
            } `}
          >
            &#94;
          </span>
        )}
      </div>
      {showItems && (
        <div className="divide-y">
          {category?.itemCards.map((item) => (
            <MenuSubCards
              key={item.card.info.id}
              subCategory={item.card.info}
            />
          ))}
        </div>
      )}
    </div>
  );
};

MenuCards.propTypes = {
  category: PropTypes.object.isRequired,
  showItems: PropTypes.bool.isRequired,
  setShowIndex: PropTypes.func.isRequired,
};

export default MenuCards;
