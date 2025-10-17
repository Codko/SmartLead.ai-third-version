"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Buttons from "../Button/Buttons";

gsap.registerPlugin(ScrollTrigger);

const Bar = () => {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // starts when component reaches 80% of viewport height
          once: true, // plays one time only
        },
      }
    );
  }, []);

  return (
    <div
      ref={barRef}
      className="w-[90%] xl:w-[90%] 2xl:w-[92%] bg-[#EFECFF] rounded-[40px] m-auto flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12 py-10 sm:py-16 px-6 sm:px-10"
    >
      {/* Title */}
      <div className="w-full sm:w-[80%]  text-center">
        <h1
          style={{ fontFamily: "bold-r" }}
          className="text-[#242323] text-[22px] sm:text-[30px] md:text-[40px] xl:text-[75px] leading-snug"
        >
          Let’s Build Your Intelligent Enterprise Outreach Engine
        </h1>
      </div>

      {/* Bottom Content Bar */}
      <div className="w-full sm:w-[90%] bg-[#edecf8] rounded-[20px] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 p-6 sm:p-8">
        {/* Left - Avatars + text */}
        <div className="flex items-center gap-4">
          <div className="flex -space-x-4">
            <img
              src="/images/celeb1.jpg"
              alt=""
              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border-2 border-white"
            />
            <img
              src="/images/celeb2.jpg"
              alt=""
              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border-2 border-white"
            />
            <img
              src="/images/celeb3.jpg"
              alt=""
              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border-2 border-white"
            />
            <img
              src="/images/celeb4.jpg"
              alt=""
              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border-2 border-white"
            />
          </div>
          <h1
            style={{ fontFamily: "regular" }}
            className="text-[#7A7A7A] text-[13px] sm:text-[15px] md:text-[17px] lg:w-[210px]"
          >
            More than 20M people are getting advantage
          </h1>
        </div>

        {/* Middle - Description */}
        <div className="text-center lg:text-left">
          <h1
            style={{ fontFamily: "regular" }}
            className="text-[#7A7A7A] text-[13px] sm:text-[15px] md:text-[17px] lg:w-[340px]"
          >
            Get AI-native operating system for your enterprise sales team
          </h1>
        </div>

        {/* Right - Button */}
        <div className="w-full sm:w-auto flex justify-center lg:justify-end">
          <Buttons bg={true} text={"Book A Demo"} />
        </div>
      </div>
    </div>
  );
};

export default Bar;
