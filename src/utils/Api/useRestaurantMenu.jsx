import { useEffect, useState } from "react";
import { MENU_API } from "../urls";
const useRestaurantMenu = (resid) => {
  const [resinfo, setResinfo] = useState([]);
  useEffect(() => {
    fetchmenu();
  }, []);

  const fetchmenu = async () => {
    const data = await fetch(MENU_API + resid);
    const json = await data.json();
    setResinfo(json.data);
  };
  return resinfo;
};
export default useRestaurantMenu;
