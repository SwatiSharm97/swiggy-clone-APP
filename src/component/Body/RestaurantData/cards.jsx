/* eslint-disable react/prop-types */
import { CDN_url } from "../../../utils/urls";
import themeContext from "../../../utils/themeContext"
import { useContext, useState} from "react";

const RestroCard = (resData) => {
  const {
    cloudinaryImageId,
    name,
    rating,
    loction,
    deliveryTime,
    cuisines,
    offer,
    upto,
    width,
  } = resData;
  const [Ishover, setHover] = useState(false)
  const theme = useContext(themeContext);
  console.log("Ishover,", Ishover,)

  return (
  
    <div className="  hover:scale-90  duration-300" onMouseEnter={()=>setHover(true)}>
     
      <div className="flex flex-col w-full ">
        <div >
          <div className={`h-[200px] ${width}`}>
            <img
              className=" h-full w-full rounded-lg"
              src={CDN_url + cloudinaryImageId}
            ></img>
          </div>

          <div className={`ml-1 w-full b bg-opacity-70 ${theme.DefaultTheme === "light" ? "bg-black" : "bg-gray-800"}`}>
            <p className="font-extrabold text-xl text-white">
              {offer} {upto}
            </p>
          </div>
        </div>

        <div className="px-2">
          <p className={`text-lg font-bold line-clamp-1 leading-relaxed ${theme.DefaultTheme === "light" ? "text-gray-700" : "text-gray-400"}`}>{name}</p>
          <p className={`text-base font-extrabold ${theme.DefaultTheme === "light" ? "text-gray-700" : "text-gray-400"}`}>
            {rating} : {deliveryTime}min
          </p>
          <p className="text-slate-500  line-clamp-1 leading-relaxed">
            {cuisines}
          </p>
          <p className="text-slate-500 leading-loose ">{loction}</p>
        </div>
      </div>
    </div>
  );
};

export default RestroCard;
