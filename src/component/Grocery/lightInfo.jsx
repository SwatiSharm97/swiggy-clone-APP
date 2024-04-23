import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const TrafficSemulator = () => {
  const [currentcolor, setCurrentColor] = useState("green");
  const [timing, setTiming] = useState({ red: 4000, yellow: 500, green: 2000 });
  useEffect(() => {
    const timer = setTimeout(() => {
      switch (currentcolor) {
        case "red":
          setCurrentColor("green");
          break;

        case "yellow":
          setCurrentColor("green");
          break;

        case "green":
          setCurrentColor("yellow");
          break;
        default:
          setCurrentColor("red");
      }
    }, timing[currentcolor]);

    return () => {
      clearTimeout(timer);
    };
  }, [currentcolor, timing]);
  return (
    <div className="w-40 h-96 border border-black bg-black flex flex-col m-1 items-center rounded-lg ">
      <span
        className={`w-4/5 h-1/4 border border-gray-600 m-3 rounded-full ${
          currentcolor === "red" ? "bg-red-500" : "bg-gray-800"
        } `}
      ></span>
      <span
        className={`w-4/5 h-1/4 border border-gray-600 m-3 rounded-full ${
          currentcolor === "yellow" ? "bg-yellow-500" : "bg-gray-800"
        } `}
      ></span>
      <span
        className={`w-4/5 h-1/4 border border-gray-600 m-3 rounded-full ${
          currentcolor === "green" ? "bg-green-500" : "bg-gray-800"
        } `}
      ></span>{" "}
    </div>
  );
};
TrafficSemulator.propTypes = {
  lightColor: PropTypes.object,
};
export default TrafficSemulator;
