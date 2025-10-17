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
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  useGSAP(() => {
    const button = gsap.utils.selector(buttonRef);
    console.log(button("div"));
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom top",
        scrub: 2,
      },
    });
    tl.from(headingRef.current, {
      y: -100,
      duration: 0.5,
      opacity: 0,
    });
    tl.from(paraRef.current, {
      y: -100,
      duration: 0.5,
      opacity: 0,
    });
    tl.from(buttonRef.current, {
      duration: 0.5,
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
