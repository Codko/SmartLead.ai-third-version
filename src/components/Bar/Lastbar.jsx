import React from "react";
import Buttons from "../Button/Buttons";

const Lastbar = () => {
  return (
    <div className="w-full lg:h-52 h-auto flex flex-col lg:flex-row items-center justify-around gap-8 sm:gap-10 md:gap-12 py-10 sm:py-16 px-6 sm:px-10 bg-[#6E58F1]">
      <div className="lg:w-[411px] md:w-[300px] w-full ">
        <h1
          style={{ fontFamily: "bold-r" }}
          className="text-white lg:text-[32px] text-[18px]"
        >
          Powerful Automated Workflows that Drive Sales
        </h1>
      </div>
      <div className="lg:w-[300px] md:w-[180px] w-full ">
        <h1
          style={{ fontFamily: "regular" }}
          className="text-[white] lg:text-[22px] text-[16px]"
        >
          Try Smartlead's AI-led outbound system today.
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <Buttons text={"Start Your Free Trial"} w={"267"} bg={true} />
        <Buttons text={"View Pricing Plans"} w={"267"} b={"#fff"} />
      </div>
    </div>
  );
};

export default Lastbar;
