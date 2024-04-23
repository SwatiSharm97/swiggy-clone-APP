import { useEffect, useState } from "react";
import { RESTAURENT_API } from "../urls";

const useMainMenuData = () => {
  const [restroinfo, setRestroinfo] = useState([]);

  useEffect(() => {
    restroFetchData();
  }, []);

  const restroFetchData = async () => {
    const info = await fetch(RESTAURENT_API);
    const Json = await info.json();
    setRestroinfo(
      Json.data.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return restroinfo;
};
export default useMainMenuData;
