import { useState } from "react";
import { useEffect } from "react";
import RestroCard from "./cards";
import { Link } from "react-router-dom";
import Skeleton from "../Shimmer";
import { RESTAURENT_API } from "../../../utils/urls";
import useOnlineStatus from "../../../utils/useOnlinestatus";
import MenuCarousal from "./MenuCarousal";
import themeContext from "../../../utils/themeContext";
import { useContext } from "react";

const RestroData = () => {
  const [restroInfo, setRestroinfo] = useState([]);
  const [text, setText] = useState("");
  const [filterData, setfilterData] = useState([]);
  const onlineStatus = useOnlineStatus();
  const theme = useContext(themeContext);
  console.log("content theme", restroInfo);

  useEffect(() => {
    restroFetchData();
  }, []);

  const restroFetchData = async () => {
    const info = await fetch(RESTAURENT_API);
    const Json = await info.json();
    setRestroinfo(
      Json.data.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterData(
      Json.data.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const TopRatedResturantData = () => {
    const filterdata = filterData.filter((item) => item.info.avgRating > 4);
    setRestroinfo(filterdata);
  };

  const OffersData = () => {
    const filterdata = filterData.filter(
      (item) => item.info.aggregatedDiscountInfoV3
    );
    setRestroinfo(filterdata);
  };

  const FastDeliveryData = () => {
    const filterdata = filterData.filter(
      (item) => item.info.sla.deliveryTime < 30
    );
    setRestroinfo(filterdata);
  };

  const OnSearchData = () => {
    const searchText = filterData.filter((item) =>
      item.info.name.toLowerCase().includes(text.toLowerCase())
    );
    setRestroinfo(searchText);
  };

  if (onlineStatus === false)
    return (
      <div className="font-bold text-4xl flex items-center">
        {" "}
        please connect to internet!!
      </div>
    );
  if (restroInfo.length === 0) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }
  return (
    <div
      className={`w-full flex justify-center ${
        theme.DefaultTheme === "dark" && "bg-gray-950"
      }`}
    >
      <div className="flex flex-col m-2 w-9/12">
        <div className="flex gap-2 items-center w-full my-8 ">
          <button
            className="cursor-pointer hover:bg-gray-400 bg-gray-300 py-1 px-2 border rounded"
            onClick={OnSearchData}
          >
            search
          </button>
          <input
            className="border border-slate-700"
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
        </div>
        <div
          className={`flex  w-full  border-b-2 border-t-2 ${
            theme.DefaultTheme === "light"
              ? "border-gray-300"
              : "border-gray-400"
          }`}
        >
          <MenuCarousal />
        </div>
        <span
          className={`w-full mt-6 mb-2 font-bold text-2xl ${
            theme.DefaultTheme === "light" ? "text-black" : "text-gray-300"
          }`}
        >
          Restaurants with online food delivery in Delhi
        </span>
        <div className="flex gap-4 p-2">
          <button
            className=" px-4 py-1 border border-gray-500 rounded-3xl"
            onClick={TopRatedResturantData}
          >
            Top Rated Restaurants
          </button>
          <button
            className="px-4 py-1 border border-gray-500 rounded-3xl"
            onClick={FastDeliveryData}
          >
            Fast Delivery
          </button>
          <button
            className="px-4 py-1 border border-gray-500 rounded-3xl"
            onClick={OffersData}
          >
            Offers
          </button>
        </div>
        <div className="w-full grid grid-cols-4 gap-4">
          {restroInfo.map((item) => (
            <Link key={item.info.id} to={"/restaurant/" + item.info.id}>
              <RestroCard
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
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestroData;
