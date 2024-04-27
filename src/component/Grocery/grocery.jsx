import { useEffect, useState } from "react";
import TrafficSemulator from "./lightInfo";
import ImageCarousal from "./ImgCarousal";
import AutoCarousal from "./autoCarousal";

const Grocery = () => {
  const [color, SetColor] = useState(null);
  const trafficColor = {
    red: {
      backgroundColor: "red",
      duration: 4000,
      next: "green",
    },
    yellow: {
      backgroundColor: "yellow",
      duration: 500,
      next: "red",
    },
    green: {
      backgroundColor: "green",
      duration: 3000,
      next: "yellow",
    },
  };
  useEffect(() => {
    SetColor(trafficColor);
  }, []);
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-center  font-bold pt-4">
        <div>React Examples</div>
      </div>
      <div className="flex flex-row">
        <div className="px-4 w-2/5">
          <span>Traffic semulator</span>
          <TrafficSemulator />
        </div>
        <div className="px-4 w-3/5 flex flex-col justify-center">
          <span className="flex justify-center"> Manual Carousal</span>
          <ImageCarousal />
        </div>
      </div>
      <div className="pt-8">
        <span className="flex justify-center">AutoCarousal</span>
        <AutoCarousal />
      </div>
    </div>
  );
};
export default Grocery;
