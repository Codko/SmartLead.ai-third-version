import React, { useRef } from "react";
import Buttons from "../Button/Buttons";
import Fillbtn from "../Button/Fillbtn";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Herocontent = () => {
  const cont1 = useRef(null);
  const cont2 = useRef(null);
  const cont3 = useRef(null);
  const cont4 = useRef(null);

  useGSAP(() => {
    const imgs = gsap.utils.selector(cont1);
    const heading = gsap.utils.selector(cont2);
    const button = gsap.utils.selector(cont4);
    const tl = gsap.timeline();
    tl.from(imgs("img"), {
      y: 100,
      duration: 0.4,
      opacity: 0,
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
    tl.from(cont3.current, {
      x: -300,
      duration: 0.4,
      opacity: 0,
    });
    tl.from(button("div"), {
      y: 50,
      opacity: 0,
      duration: 0.4,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, []);
  return (
    <div className="xl:w-[850px] xl:h-[445px] lg:w-[750px] lg:h-[445px] md:w-[600px] md:h-[400px] sm:w-[400px] sm:h-[300px] w-[300px] h-[200px] ">
      <div ref={cont1} className="flex justify-center gap-4 md:gap-8">
        <img
          src="/images/stars1.svg"
          alt=""
          className="w-[90px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[152.9578094482422px] md:h-[150px]"
        />
        <img
          src="/images/stars2.svg"
          alt=""
          className="w-[90px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[172.9578094482422px] md:h-[150px] "
        />
      </div>
      <div
        ref={cont2}
        className="flex flex-col justify-center items-center gap-6"
      >
        <h1
          style={{ fontFamily: "bold-r" }}
          className="xl:text-[70px] md:text-[40px] sm:text-[26px] text-[23px] text-center  xl:w-[800px] md:w-[500px] sm:w-[300px] w-[250px] lg:leading-16"
        >
          Your First AI Powered GTM Workflow
        </h1>
        <p
          style={{ fontFamily: "regular" }}
          className="lg:text-[18px] xl:w-[800px] md:w-[500px] sm:w-[300px] w-[250px] text-[#848884] text-center"
        >
          SmartAgents automate your entire revenue workflow, from lead research
          and outreach to follow-ups, analytics, and closing deals.
        </p>
      </div>
      <div
        ref={cont3}
        className="xl:w-[800px] md:w-[500px] sm:w-[400px] w-[300px] h-[79px] bg-white rounded-2xl m-auto mt-8 flex items-center justify-between sm:gap-2 sm:p-4 p-2"
      >
        <input
          type="text"
          style={{ fontFamily: "regular" }}
          className="flex-1 outline-none border-none w-1/2 sm:w-full text-[#B2BEB5] bg-transparent sm:px-3 text-[12px] sm:text-[16px]"
          placeholder="Type here to build Agent"
        />
        <div className="flex-shrink-0">
          <Buttons text={"Build Agent"} />
        </div>
      </div>
      <div ref={cont4} className="flex justify-center flex-wrap gap-2 mt-6">
        <Fillbtn text={"LinkeIn outreach"} w={"233"} />
        <Fillbtn text={"Customer Support"} w={"239"} />
        <Fillbtn text={"Lead gen"} w={"157"} />
        <Fillbtn text={"Personal Website"} w={"226"} />
        <Fillbtn text={"Meeting Recorders"} w={"233"} />
      </div>
    </div>
  );
};

export default Herocontent;
