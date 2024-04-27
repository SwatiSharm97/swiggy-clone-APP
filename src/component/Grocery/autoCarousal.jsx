import { useEffect, useState } from "react";

const imageArray = [
  "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4091975/pexels-photo-4091975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const AutoCarousal = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      current === imageArray.length - 1
        ? setCurrent(0)
        : setCurrent(current + 1);
    }, [2000]);
  });
  return (
    <div>
      <div className=" flex justify-center">
        <img className="w-11/12 h-96" src={imageArray[current]} alt="image" />
      </div>
    </div>
  );
};

export default AutoCarousal;
