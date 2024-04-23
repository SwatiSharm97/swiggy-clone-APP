import { useState } from "react";
import AccordionCard from "./accordionData";
import { useEffect } from "react";

const ContactUs = () => {
  const [list, SetList] = useState(null);

  const Data = [
    {
      id: 1,
      title: "What is React",
      info: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.",
    },
    {
      id: 2,
      title: "What is Node",
      info: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.",
    },
    {
      id: 3,
      title: "What is Node",
      info: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.",
    },
  ];
  useEffect(() => {
    SetList(Data);
  }, []);
  console.log(list);

 
  return (
    <div className="w-1/2 h-max border border-gray-950">
      <div>
        <span className="font-bold justify-center flex">Accordion</span>
        {list?.map((item, key) => (
          <div key={key}>
            <AccordionCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ContactUs;
