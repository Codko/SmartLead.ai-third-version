import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Buttons from "../Button/Buttons";
import AutomateSection from "../ScrollReveal/ScrollReveal";
import { data } from "../../constants/app";
// import ScrollReveal, { Timeline } from "../ScrollReveal/ScrollReveal";
gsap.registerPlugin(ScrollTrigger);

const Revenuecontent = () => {
  const container = useRef(null);
  const headingRef = useRef(null);
  const tagRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.from(tagRef.current, {
      y: -100,
      duration: 0.4,
      opacity: 0,
    });
    tl.from(headingRef.current, {
      duration: 0.4,
      opacity: 0,
    });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div
        ref={container}
        className="flex flex-col justify-center items-center gap-4"
      >
        <h1
          ref={tagRef}
          style={{ fontFamily: "regular-r" }}
          className="xl:text-[24px] text-[18px] text-[#848884]"
        >
          Manual Chaos → AI Clarity
        </h1>
        <h1
          ref={headingRef}
          style={{ fontFamily: "bold-r" }}
          className="xl:text-[72px] md:text-[40px] sm:text-[26px] text-[23px] text-center  xl:w-[705px] md:w-[500px] sm:w-[300px] w-[250px] lg:leading-tight"
        >
          From Prompt to Revenue, In Minutes
        </h1>
      </div>
    </div>
  );
};

export default Revenuecontent;
