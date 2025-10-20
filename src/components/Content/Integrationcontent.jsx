import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Integrationcontent = () => {
  const cont2 = useRef(null);

  useGSAP(() => {
    const heading = gsap.utils.selector(cont2);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cont2.current,
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.from(heading("h1"), {
      y: "80%",
      duration: 0.4,
      opacity: 0,
    });
    tl.from(heading("p"), {
      y: "-80%",
      duration: 0.4,
      opacity: 0,
    });
  }, []);
  return (
    <div className="xl:w-[850px] xl:h-[445px] lg:w-[750px] lg:h-[445px] md:w-[600px] md:h-[400px] sm:w-[400px] sm:h-[300px] w-[300px] h-[200px] ">
      <div
        ref={cont2}
        className="flex flex-col items-center justify-center gap-6"
      >
        <h1
          style={{ fontFamily: "bold-r" }}
          className="xl:text-[70px] md:text-[40px] sm:text-[26px] text-[23px] text-center  xl:w-[800px] md:w-[500px] sm:w-[300px] w-[250px] lg:leading-20"
        >
          Let <span className="text-[#6E58F1]">SmartAgent</span> take care of the busy work
        </h1>
        <h1
          style={{ fontFamily: "regular" }}
          className="lg:text-[18px] xl:w-[800px] md:w-[500px] sm:w-[300px] w-[250px] text-[#848884] text-center"
        >
          Smart Agent automates integrates , personalizes and optimizes-so your
          team can focus on what trully matters
        </h1>
      </div>
    </div>
  );
};

export default Integrationcontent;
