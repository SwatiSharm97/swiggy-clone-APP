/* eslint-disable react/prop-types */
import { CDN_url } from "../../../utils/urls";

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
  } = resData;

  return (
    <div className="">
      <div className="flex flex-col ">
        <div>
          <div className="h-[200px] w-[300px]">
            <img
              className=" h-full w-full rounded-lg"
              src={CDN_url + cloudinaryImageId}
            ></img>
          </div>

          <div className=" ml-1 w-[300px] bg-black bg-opacity-70">
            <p className="font-extrabold text-xl text-white">
              {offer} {upto}
            </p>
          </div>
        </div>

        <div className="px-2">
          <p className="text-lg font-bold line-clamp-1 leading-loose">{name}</p>
          <p className="text-base font-extrabold ">
            {rating} : {deliveryTime}min
          </p>
          <p className="text-slate-500  line-clamp-1 leading-loose">
            {cuisines}
          </p>
          <p className="text-slate-500 leading-loose ">{loction}</p>
        </div>
      </div>
    </div>
  );
};

export default RestroCard;
