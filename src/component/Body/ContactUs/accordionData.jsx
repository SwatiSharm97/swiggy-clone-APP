import PropTypes from "prop-types";
import { useState } from "react";
const AccordionCard = ({ data }) => {
  const [showInfo, setShowInfo] = useState(false);
  const HandleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  // const {title, info} = list
  console.log(data);
  return (
    <div className="w-11/12 h-max m-4 p-2 border items-center">
      <div className="flex justify-between ">
        <span>{data.title}</span>
        <span className="cursor-pointer" onClick={() => HandleShowInfo()}>
          {showInfo ? "-" : "+"}
        </span>
      </div>

      <div>
        {showInfo && <span>{data.info}</span>}
      </div>
    </div>
  );
};
AccordionCard.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccordionCard;
