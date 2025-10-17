import React, { useContext, useEffect, useState } from "react";
import { SlEnergy } from "react-icons/sl";

const Fillbtn = ({ value, text, w }) => {
  const [mobile, setmobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setmobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <div className="w-[48%] sm:w-auto flex justify-center">
      <button
        style={{
          fontFamily: "regular",
          width: !mobile ? `${w}px` : `100%`,
        }}
        className={`${
          value
            ? "hover:border hover:border-[#6E58F1] active:scale-95 cursor-pointer"
            : "btn-fill hover:text-white"
        } 
        xl:h-[45px]  lg:h-[45px]  md:h-[40px]  sm:h-[40px]  h-[35px] rounded-[16px] text-[#6E58F1] bg-[#6E58F11A] text-base text-[12px] lg:text-[16px] text-center flex justify-center items-center sm:gap-2
        hover:bg-[#6E58F1] hover:text-white hover:duration-200 p-2  
        transition-all transform  ease-in-out`}
      >
        <SlEnergy className="xl:text-[20px]" />
        {text}
      </button>
    </div>
  );
};

export default Fillbtn;
