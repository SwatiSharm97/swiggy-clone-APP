import { useParams } from "react-router-dom";
import Skeleton from "../Shimmer";
import useRestaurantMenu from "../../../utils/Api/useRestaurantMenu";
import MenuCards from "./MenuCards";
import { useState } from "react";
import themeContext from "../../../utils/themeContext";
import { useContext } from "react";

const RestaurantMenu = () => {
  const [showindex, setShowIndex] = useState(null);
  const { resid } = useParams();
  const resinfo = useRestaurantMenu(resid);
  console.log(resinfo);
  const theme = useContext(themeContext);

  if (resinfo.length === 0)
    return (
      <div>
        <Skeleton />
      </div>
    );

  // console.log(resinfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
  // console.log(resinfo)

  const indexTokeep = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const filterCategory =
    resinfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (_, index) => indexTokeep.includes(index)
    );

  // const { name, cuisines, locality, city, avgRating } =
  //   resinfo.cards[2].card.card.info;

  return (
    <div
      className={` w-full flex flex-col justify-center items-center divide-y ${
        theme.DefaultTheme === "light" ? "bg-white" : "bg-gray-950"
      } `}
    >
      <div className=" w-2/3 flex flex-row justify-between  items-center  m-4">
        <div>
          <p
            className={` font-bold text-3xl ${
              theme.DefaultTheme === "light" ? "text-gray-700" : "text-gray-200"
            } `}
          >
            {resinfo?.cards[2]?.card?.card?.info?.name}
          </p>
          <p
            className={`${
              theme.DefaultTheme === "light" ? "text-gray-500" : "text-gray-200"
            } `}
          >
            {resinfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
          </p>
          <p
            className={`${
              theme.DefaultTheme === "light" ? "text-gray-500" : "text-gray-200"
            } `}
          >
            {resinfo?.cards[2]?.card?.card?.info?.locality},
            {resinfo?.cards[2]?.card?.card?.info?.city}
          </p>
        </div>
        <div>
          <p
            className={`${
              theme.DefaultTheme === "light" ? "text-gray-500" : "text-gray-200"
            } `}
          >
            {resinfo?.cards[2]?.card?.card?.info?.avgRating} Rating
          </p>
        </div>
      </div>
      <div className=" w-2/3 flex flex-col justify-center m-2 divide-y-8">
        {filterCategory.map((item, index) => (
          <MenuCards
            key={index}
            category={item.card?.card}
            // showItems={index === showindex ? true : false}
            // setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
