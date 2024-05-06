import { useRef ,useState} from "react";
import useMainMenuData from "../../../utils/Api/useMainMenu";
import RestroCard from "./cards";
import themeContext from "../../../utils/themeContext";
import { useContext } from "react";

const MenuCarousal = () => {
  const MenuData = useMainMenuData();
  const divRef = useRef(null);
  const theme = useContext(themeContext);
  const [cardWidth, setCardWidth] = useState('w-[270px]')

  const scrollLeft = () => {
    if (divRef.current) {
      //  const width = divRef.current.clientWidth
      divRef.current.scrollLeft -= 800; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (divRef.current) {
      // const width = divRef.current.clientWidth
      divRef.current.scrollLeft += 800; // Adjust the scroll distance as needed
    }
  };

  return (
    <div
      className={`w-full py-10 px-2  `}
    >
      <div className="flex w-full justify-between mb-2">
        <div
          className={`font-bold text-2xl ${
            theme.DefaultTheme === "light" ? "text-black" : "text-gray-300"
          }`}
        >
          Top restaurant chains in Delhi
        </div>
        <div className="flex gap-2 text-white">
          <button
            className="rounded-full bg-slate-400 hover:bg-slate-500 px-2 font-extrabold"
            onClick={scrollLeft}
          >
            &lt;
          </button>
          <button
            className="rounded-full bg-slate-400 hover:bg-slate-500 px-2 font-extrabold "
            onClick={scrollRight}
          >
            &gt;
          </button>
        </div>
      </div>
      <div
        className="w-full  flex flex-row gap-8 overflow-x-hidden scroll-smooth "
        ref={divRef}
      >
        {MenuData.map((item) => (
          <RestroCard
            key={item.info.id}
            cloudinaryImageId={item.info?.cloudinaryImageId}
            name={item.info.name}
            rating={item.info.avgRatingString}
            deliveryTime={item.info.sla.deliveryTime}
            cuisines={item.info.cuisines.join(", ")}
            loction={item.info.locality}
            offer={
              item.info.aggregatedDiscountInfoV3
                ? item.info.aggregatedDiscountInfoV3.header
                : " "
            }
            upto={
              item.info.aggregatedDiscountInfoV3
                ? item.info.aggregatedDiscountInfoV3.subHeader
                : " "
            }
            width ={cardWidth}
          />
        ))}
      </div>
    </div>
  );
};
export default MenuCarousal;
