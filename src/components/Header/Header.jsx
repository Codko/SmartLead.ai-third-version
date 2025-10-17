import React, { useRef } from "react";
import Buttons from "../Button/Buttons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Header = () => {
  const headerRef = useRef(null);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
    });
  }, []);
  return (
    <div
      ref={headerRef}
      className="w-[90%] h-14 2xl:w-[1600px] 2xl:h-[70px] xl:w-[1200px] xl:h-[70px] lg:w-[1000px] lg:h-[70px] sm:bg-white sm:rounded-[30px]  m-auto sm:mt-[42px] sm:flex sm:items-center sm:justify-between flex justify-around hover:cursor-pointer"
    >
      <div className="m-auto sm:m-0 p-6">
        <img src="/images/Vector.svg" alt="" />
      </div>
      <div className="sm:p-4 lg:p-0">
        <ul
          style={{ fontFamily: "regular" }}
          className="hidden sm:flex sm:gap-4 lg:gap-8 text-[#848884] sm:text-[14px] md:text-[16px] lg:text-[18px]"
        >
          <li>Product</li>
          <li>Features</li>
          <li>Solutions</li>
        </ul>
      </div>
      <div className="hidden lg:block p-4">
        <ul className="flex items-center gap-4">
          <li className="text-[#848884] xl:text-[18px]">Login</li>
          <Buttons text={"Book a Demo"} />
        </ul>
      </div>
    </div>
  );
};

export default Header;
