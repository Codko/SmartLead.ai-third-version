import React from "react";

const GTMcontent = () => {
  return (
    <div className="w-[90%]   m-auto flex flex-col items-center">
      <div className="w-[70%]  flex flex-col items-center gap-8">
        <h1
          style={{ fontFamily: "bold-r" }}
          className="xl:text-[70px] md:text-[40px] sm:text-[26px] text-[23px] text-center lg:leading-16"
        >
          Your GTM Team, On Autopilot
        </h1>
        <p style={{fontFamily:"regular"}} className="text-[#848884] lg:text-[18px] sm:text-[14px] text-[12px] text-center w-[70%] ">
          Give your sales team the freedom from doing unwanted manual,
          repetitive tasks. Stop juggling between tools, repetitive workflows,
          and endless manual tasks.
        </p>
      </div>
    </div>
  );
};

export default GTMcontent;
