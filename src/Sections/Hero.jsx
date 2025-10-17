import React from "react";
import Header from "../components/Header/Header";
import Herocontent from "../components/Content/Herocontent";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="opacity-15">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/video/effect_1760119682266.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="relative z-10">
        <Header />
      </div>
      <div className="relative z-10 flex justify-center items-center mt-12 lg:mt-8 ">
        <Herocontent />
      </div>
      <div className="relative z-10 xl:w-[850px] xl:h-[445px] lg:w-[750px] lg:h-[445px] md:w-[600px] md:h-[400px] sm:w-[400px] sm:h-[300px] w-[300px] h-[200px] m-auto mt-96 sm:mt-82 md:mt-64 lg:mt-52 ">
        <img
          src="/video/fdcd72de195003b38e2a816a55b6b6ef9ca4e56e.gif"
          alt=""
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
