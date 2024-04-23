import { useState } from "react";
// import { CDN_url } from "../../../utils/urls";

const FoodModal = (prop) => {
  // const {cloudinaryImageId, name, location} = props;
  const {isopen ,Onclose} = prop
 

  if (!isopen) {
    return null;
  }

  return (
    <div>
      <div className="w-[200p px] h-[180px] border-1 rounded-lg bg-red-400 justify-center">
        <div>
          {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img> */}
          <p>hellooo</p>
          <p>heyy</p>
          <button onClick={Onclose}>close</button>
        </div>
      </div>
    </div>
  );
};
export default FoodModal;
