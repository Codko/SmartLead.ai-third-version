import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Buttons = ({ text, w, bg, b }) => {
  const [mobile, setmobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setmobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <div
      style={{
        fontFamily: "regular",
        width: !mobile ? `${w}px` : undefined,
        backgroundColor: bg ? "#fff" : "#6E58F1",
        color: bg ? "#6E58F1" : "#fff",
        border: b ? "1px" : "",
        border: b ? "1px solid #fff" : "none",
      }}
      onClick={() => alert("hello")}
      className={`${
        !w
          ? "xl:w-[196px] xl:h-[47px] lg:w-[155px] lg:h-[47px] md:w-[130px] md:h-[40px] sm:w-[110px] sm:h-[40px] w-[90px] h-[35px]"
          : "h-[47px]"
      } rounded-[16px] bg-[#6E58F1] text-white text-[12px] lg:text-[18px] text-center flex justify-center items-center sm:gap-2 transition-all transform duration-200 ease-in-out hover:scale-110 cursor-pointer`}
    >
      {text}
      <IoIosArrowRoundForward className="xl:text-[28px]" />
    </div>
  );
};

export default Buttons;
