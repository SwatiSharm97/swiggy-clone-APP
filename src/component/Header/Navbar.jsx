import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import FoodModal from "../Body/Modal/FoodModal";
import useOnlineStatus from "../../utils/useOnlinestatus";
import UserContext from "../../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [open, setIsopen] = useState(false);
  const openModal = () => setIsopen(true);
  const closeModal = () => setIsopen(false);
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext); // can do {loggedInUser} = useContext(UserContext) and dirtcly add in list
  const totalCartItem = useSelector((store) => store.cart.items);
  // const counter = useSelector((store)=>store.cart.count)
  // console.log(totalCartItem)
  // console.log(counter)

  return (
    <>
      <div className=" p-4 flex flex-row justify-center items-center shadow-xl w-full">
        <div className="w-3/4 flex flex-row items-center justify-between  ">
          <div>
            <img
              className="w-16 h-16"
              src="https://image.similarpng.com/very-thumbnail/2020/04/fast-food-logo-emblem.png"
            ></img>
          </div>
          <div className="">
            <ul className="flex gap-4 font-bold text-gray-600">
              <li>online status : {onlineStatus ? "🟢" : "🔴"}</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About</Link>
              </li>
              <li>
                <Link to="/contactusPage">Contact Us</Link>
              </li>
              <li className="text-black">
                <Link to="/grocery">Grocery </Link>
              </li>
              <li>
                <Link to="/cart">
                  Cart
                  <span className="text-black">
                    ({totalCartItem.length}items)
                  </span>
                </Link>
              </li>
              <li className="font-bold text-black">{data.loggedInUser}</li>
              <li>
                <button onClick={openModal}> CLICK</button>
              </li>
            </ul>
            {open && <FoodModal isopen={open} Onclose={closeModal} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
