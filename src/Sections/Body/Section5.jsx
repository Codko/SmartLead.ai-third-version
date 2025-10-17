import React from "react";
import GTMcontent from "../../components/Content/GTMcontent";
import { StickyScroll } from "../../components/StickyScroll/Stickyscroll";
import { content } from "../../constants/app";
import Bar from "../../components/Bar/Bar";

const Section5 = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden mt-40">
      
      <div className="absolute inset-0 z-0 opacity-10">
        <video
          className="w-full h-full object-cover"
          src="/video/effect_1760120001602.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      
      <div className="relative z-10 flex flex-col items-center justify-center gap-20 px-6    w-full">
        <GTMcontent />
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default Section5;
