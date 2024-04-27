import { useState } from "react";

const imageArray = [
  "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4091975/pexels-photo-4091975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const ImageCarousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log("==========", imageArray.length);

  const SlideRight = () => {
    console.log("===========", currentIndex);
    currentIndex === imageArray.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  const SlideLeft = () => {
    currentIndex === 0
      ? setCurrentIndex(imageArray.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className=" flex ">
      <button className=" text-6xl px-4" onClick={SlideLeft}>
        &lt;
      </button>
      <img
        className="w-11/12 h-96"
        src={imageArray[currentIndex]}
        alt="image"
      />
      <button className="text-6xl px-4 " onClick={SlideRight}>
        &gt;
      </button>
    </div>
  );
};
export default ImageCarousal;
