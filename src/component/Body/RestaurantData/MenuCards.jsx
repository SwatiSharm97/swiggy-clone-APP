import PropTypes from "prop-types";
// import { useContext, useState } from "react";
import MenuSubCards from "./MenuSubCards";
import { useState } from "react";

const MenuCards = ({ category }) => {
  const [showIndex, setShowIndex] = useState(false);

  const HandleClick = () => {
    setShowIndex(!showIndex);
  };

  return (
    <div>
      <div
        className="flex flex-row justify-between pt-4 pb-4 cursor-pointer"
        onClick={HandleClick}
      >
        <span className="text-xl font-bold">
          {category.title}({category?.itemCards?.length})
        </span>
        {showIndex ? (
          <span className="text-2xl ">&#8964;</span>
        ) : (
          <span className="text-2xl ">&#94;</span>
        )}
      </div>
      {showIndex && (
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
