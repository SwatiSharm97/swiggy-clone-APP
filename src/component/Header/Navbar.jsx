import { Link } from "react-router-dom";
import { useContext } from "react";
import useOnlineStatus from "../../utils/useOnlinestatus";
import { useSelector } from "react-redux";
import themeContext from "../../utils/themeContext";

const Header = ({ HandleTheme }) => {
  const onlineStatus = useOnlineStatus();
  const theme = useContext(themeContext);
  // const theme = useContext(UserContext); // can do {loggedInUser} = useContext(UserContext) and dirtcly add in list
  const totalCartItem = useSelector((store) => store.cart.items);
  console.log(theme);

  return (
    <>
      <div
        className={`p-4 flex flex-row justify-center items-center shadow-xl w-full ${
          theme.DefaultTheme === "light" ? "bg-white" : "bg-gray-900"
        } `}
      >
        <div className="w-3/4 flex flex-row items-center justify-between  ">
          <div>
            <img
              className="w-16 h-16"
              src="https://image.similarpng.com/very-thumbnail/2020/04/fast-food-logo-emblem.png"
            ></img>
          </div>
          <div className="">
            <ul
              className={`flex gap-4 font-bold ${
                theme.DefaultTheme === "light"
                  ? "text-gray-600"
                  : "text-gray-200"
              } `}
            >
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
              <li>
                <Link to="/grocery">Grocery </Link>
              </li>
              <li>
                <Link to="/cart">
                  Cart
                  <span
                    className={`${
                      theme.DefaultTheme === "light"
                        ? "text-black"
                        : "text-gray-400"
                    }`}
                  >
                    ({totalCartItem.length}items)
                  </span>
                </Link>
              </li>
              <li onClick={HandleTheme}>{theme.DefaultTheme}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
