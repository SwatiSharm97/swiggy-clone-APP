import { lazy, Suspense, useEffect, useState } from "react";
import AboutUs from "./component/Body/AboutUs/AboutUs";
import Header from "./component/Header/Navbar";
import HomePage from "./component/Body/homepage";
import RestaurantMenu from "./component/Body/RestaurantData/RestaurantMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestroData from "./component/Body/RestaurantData/content";
import { Fragment } from "react";
import Skeleton from "./component/Body/Shimmer";
import CartPage from "./component/Cart/cart";
import ContactUs from "./component/Body/ContactUs/ContactUs";
import themeContext from "./utils/themeContext";
import { useContext } from "react";

// import Grocery  from "./component/Grocery/grocery";

const Grocery = lazy(() => import("./component/Grocery/grocery"));

function App() {
  const theme = useContext(themeContext);
  const [Localtheme, setTheme] = useState("light");
  const HandleTheme = () => {
    Localtheme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div >
      <Router>
        <Fragment>
          <themeContext.Provider value={{ DefaultTheme: Localtheme }}>
            <Header HandleTheme={HandleTheme} />

            <Routes>
              <Route path="/" element={<RestroData />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/restaurant/:resid" element={<RestaurantMenu />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/contactusPage" element={<ContactUs />} />
              <Route
                path="/grocery"
                element={
                  <Suspense fallback={<Skeleton />}>
                    <Grocery />
                  </Suspense>
                }
              />
            </Routes>
          </themeContext.Provider>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
