"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Buttons from "../Button/Buttons";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = () => {
  // Left side refs
  const containerRef1 = useRef(null);
  const counterLeft = useRef(null);
  const div1 = useRef(null);
  const div2 = useRef(null);
  const div3 = useRef(null);
  const div4 = useRef(null);
  const div5 = useRef(null);
  const div6 = useRef(null);
  const div7 = useRef(null);
  const div8 = useRef(null);
  const div9 = useRef(null);
  const div10 = useRef(null);

  // Right side refs
  const containerRef2 = useRef(null);
  const counterRight = useRef(null);
  const rdiv1 = useRef(null);
  const rdiv2 = useRef(null);
  const rdiv3 = useRef(null);
  const rdiv4 = useRef(null);
  const rdiv5 = useRef(null);
  const rdiv6 = useRef(null);

  useGSAP(() => {
    const animateSet = (
      refs,
      container,
      counterRef,
      distance = 60,
      timelineOffset = 0.3,
      scrollEnd = 2000
    ) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `+=${scrollEnd}`,
          pin: true,
          scrub: true,
        },
      });

      refs.forEach((divRef, i) => {
        tl.to(
          divRef.current,
          { y: -distance * (i + 1), duration: 1 },
          i * timelineOffset
        )
          .to(
            divRef.current?.querySelector(".check"),
            { opacity: 1, duration: 0.5 },
            i * timelineOffset
          )
          .to(
            counterRef.current,
            { innerText: i + 1, duration: 0.1, snap: { innerText: 1 } },
            i * timelineOffset
          );
      });
    };

    // LEFT column
    animateSet(
      [div1, div2, div3, div4, div5, div6, div7, div8, div9, div10],
      containerRef1,
      counterLeft,
      60,
      0.3,
      2000
    );

    // RIGHT column — faster
    animateSet(
      [rdiv1, rdiv2, rdiv3, rdiv4, rdiv5, rdiv6],
      containerRef2,
      counterRight,
      90,
      0.2,
      1500
    );
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-10 -mt-[700px] lg:mt-0 px-4 lg:px-0 p-4">
      {/* LEFT COLUMN */}
      <div>
        <div ref={containerRef1} className="flex flex-col items-center gap-6">
          {/* Counter Box */}
          <div className="xl:w-[600px] xl:h-[150px] w-[300px] h-[80px] md:w-[500px] md:h-[125px] rounded-[20px] md:rounded-[40px] bg-[#4A494B] flex items-center justify-center mb-6">
            <h1
              className="text-white lg:text-[30px] text-[20px] flex gap-4 items-center"
              style={{ fontFamily: "bold-r" }}
            >
              Manual Process{" "}
              <div className="xl:w-[200px] w-[60px] h-12 xl:h-20 bg-white rounded-4xl text-black flex justify-center items-center">
                <h1 ref={counterLeft} className="text-black text-[40px]">
                  0
                </h1>
              </div>
              Hrs
            </h1>
          </div>

          {/* Static first box */}
          <div className="xl:w-[600px] xl:h-[150px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md: rounded-[20px] border border-[#D3CECE] bg-white flex items-center justify-between">
            <div className="flex items-center gap-8 p-1">
              <img src="/images/Rectangle 758.svg" alt="" />
              <h1
                className="text-[#4C4C4C] text-[20px]"
                style={{ fontFamily: "bold-r" }}
              >
                Define Target Audience
              </h1>
            </div>
            <img src="/images/check.svg" alt="" className="check p-4" />
          </div>

          {/* Animated Boxes */}
          <div
            ref={div1}
            className="xl:w-[600px] xl:h-[150px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md:  rounded-[20px] border border-[#D3CECE] bg-white flex items-center justify-between"
          >
            <div className="flex items-center gap-8 p-1">
              <img src="/images/Rectangle 758 (1).svg" alt="" />
              <h1
                className="text-[#4C4C4C] text-[20px]"
                style={{ fontFamily: "bold-r" }}
              >
                Personalize Outreach
              </h1>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="opacity-20 check p-4"
            />
          </div>

          <div
            ref={div2}
            className="xl:w-[600px] xl:h-[150px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md: rounded-[20px]border border-[#D3CECE] bg-white flex items-center justify-between"
          >
            <div className="flex items-center gap-8 p-1">
              <img src="/images/Rectangle 758 (2).svg" alt="" />
              <h1
                className="text-[#4C4C4C] text-[20px]"
                style={{ fontFamily: "bold-r" }}
              >
                Automate Messaging
              </h1>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="opacity-20 check p-4"
            />
          </div>

          <div
            ref={div3}
            className="xl:w-[600px] xl:h-[150px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md: rounded-[20px] border border-[#D3CECE] bg-white flex items-center justify-between"
          >
            <div className="flex items-center gap-8 p-1">
              <img src="/images/Rectangle 758 (3).svg" alt="" />
              <h1
                className="text-[#4C4C4C] text-[20px]"
                style={{ fontFamily: "bold-r" }}
              >
                Optimize Timing
              </h1>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="opacity-20 check p-4"
            />
          </div>

          <div
            ref={div4}
            className="xl:w-[600px] xl:h-[150px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md: rounded-[20px] border border-[#D3CECE] bg-white flex items-center justify-between"
          >
            <div className="flex items-center gap-8 p-1">
              <img src="/images/Rectangle 758 (4).svg" alt="" />
              <h1
                className="text-[#4C4C4C] text-[20px]"
                style={{ fontFamily: "bold-r" }}
              >
                Track Engagement
              </h1>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="opacity-20 check p-4"
            />
          </div>

          <div
            ref={div5}
            className="xl:w-[600px] xl:h-[150px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md: rounded-[20px] border border-[#D3CECE] bg-white flex items-center justify-between"
          >
            <div className="flex items-center gap-8 p-1">
              <img src="/images/Rectangle 758 (5).svg" alt="" />
              <h1
                className="text-[#4C4C4C] text-[20px]"
                style={{ fontFamily: "bold-r" }}
              >
                Refine Strategy
              </h1>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="opacity-20 check p-4"
            />
          </div>

          <div
            ref={div6}
            className="xl:w-[600px] xl:h-[150px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md: rounded-[20px] border border-[#D3CECE] bg-white flex items-center justify-between"
          >
            <div className="flex items-center gap-8 p-1">
              <img src="/images/crank.svg" alt="" />
              <h1
                className="text-[#4C4C4C] text-[20px]"
                style={{ fontFamily: "bold-r" }}
              >
                Scale Outreach
              </h1>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="opacity-20 check p-4"
            />
          </div>

          <div
            ref={div7}
            className="xl:w-[600px] xl:h-[150px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md: rounded-[20px] border border-[#D3CECE] bg-white flex items-center justify-between"
          >
            <div className="flex items-center gap-8 p-1">
              <img src="/images/crank.svg" alt="" />
              <h1
                className="text-[#4C4C4C] text-[20px]"
                style={{ fontFamily: "bold-r" }}
              >
                Scale Outreach
              </h1>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="opacity-20 check p-4"
            />
          </div>

          <div
            ref={div8}
            className="xl:w-[600px] xl:h-[150px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md: rounded-[20px] border border-[#D3CECE] bg-white flex items-center justify-between"
          >
            <div className="flex items-center gap-8 p-1">
              <img src="/images/crank.svg" alt="" />
              <h1
                className="text-[#4C4C4C] text-[20px]"
                style={{ fontFamily: "bold-r" }}
              >
                Scale Outreach
              </h1>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="opacity-20 check p-4"
            />
          </div>

          <div
            ref={div9}
            className="xl:w-[600px] xl:h-[150px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md: rounded-[20px] border border-[#D3CECE] bg-white flex items-center justify-between"
          >
            <div className="flex items-center gap-8 p-1">
              <img src="/images/crank.svg" alt="" />
              <h1
                className="text-[#4C4C4C] text-[20px]"
                style={{ fontFamily: "bold-r" }}
              >
                Scale Outreach
              </h1>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="opacity-20 check p-4"
            />
          </div>

          <div
            ref={div10}
            className="xl:w-[600px] xl:h-[150px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md: rounded-[20px] border border-[#D3CECE] bg-white flex items-center justify-between"
          >
            <div className="flex items-center gap-8 p-1">
              <img src="/images/crank.svg" alt="" />
              <h1
                className="text-[#4C4C4C] text-[20px]"
                style={{ fontFamily: "bold-r" }}
              >
                Scale Outreach
              </h1>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="opacity-20 check p-4"
            />
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div>
        <div ref={containerRef2} className="flex flex-col items-center gap-6">
          {/* Counter Box */}
          <div className="xl:w-[600px] xl:h-[150px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md: rounded-[40px] bg-[#6E58F1] flex items-center justify-center mb-6">
            <h1
              className="text-white lg:text-[30px] text-[20px] flex gap-4 items-center"
              style={{ fontFamily: "bold-r" }}
            >
              With Smartlead{" "}
              <div className="xl:w-[200px] w-[60px] h-12 xl:h-20 bg-white rounded-4xl text-black flex justify-center items-center">
                <h1 ref={counterRight} className="text-black text-[40px]">
                  0
                </h1>
              </div>
              Min
            </h1>
          </div>

          {/* Static first box */}
          <div className="xl:w-[600px] xl:h-[150px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md: rounded-[20px] border border-[#D3CECE] bg-white flex items-center justify-between">
            <div className="flex items-center gap-8 p-1">
              <img src="/images/Rectangle 758.svg" alt="" />
              <h1
                className="text-[#4C4C4C] text-[20px]"
                style={{ fontFamily: "bold-r" }}
              >
                Define Your Campaign
              </h1>
            </div>
            <img src="/images/check-p.svg" alt="" className="check p-4" />
          </div>

          {/* Animated Boxes */}
          <div
            ref={rdiv1}
            className="xl:w-[600px] xl:h-[150px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md: rounded-[20px] border border-[#D3CECE] bg-white flex items-center justify-between"
          >
            <div className="flex items-center gap-8 p-1">
              <img src="/images/Rectangle 758 (1).svg" alt="" />
              <h1
                className="text-[#4C4C4C] text-[20px]"
                style={{ fontFamily: "bold-r" }}
              >
                Discover Quality Leads
              </h1>
            </div>
            <img
              src="/images/check-p.svg"
              alt=""
              className="opacity-20 check p-4"
            />
          </div>

          <div
            ref={rdiv2}
            className="xl:w-[600px] xl:h-[150px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md: rounded-[20px] border border-[#D3CECE] bg-white flex items-center justify-between"
          >
            <div className="flex items-center gap-8 p-1">
              <img src="/images/Rectangle 758 (2).svg" alt="" />
              <h1
                className="text-[#4C4C4C] text-[20px]"
                style={{ fontFamily: "bold-r" }}
              >
                Enrich Lead Data
              </h1>
            </div>
            <img
              src="/images/check-p.svg"
              alt=""
              className="opacity-20 check p-4"
            />
          </div>

          <div
            ref={rdiv3}
            className="xl:w-[600px] xl:h-[150px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md: rounded-[20px] border border-[#D3CECE] bg-white flex items-center justify-between"
          >
            <div className="flex items-center gap-8 p-1">
              <img src="/images/Rectangle 758 (3).svg" alt="" />
              <h1
                className="text-[#4C4C4C] text-[20px]"
                style={{ fontFamily: "bold-r" }}
              >
                Craft Personalized Messages
              </h1>
            </div>
            <img
              src="/images/check-p.svg"
              alt=""
              className="opacity-20 check p-4"
            />
          </div>

          <div
            ref={rdiv4}
            className="xl:w-[600px] xl:h-[150px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md: rounded-[20px] border border-[#D3CECE] bg-white flex items-center justify-between"
          >
            <div className="flex items-center gap-8 p-1">
              <img src="/images/Rectangle 758 (4).svg" alt="" />
              <h1
                className="text-[#4C4C4C] text-[20px]"
                style={{ fontFamily: "bold-r" }}
              >
                Automate Outreach & Follow-ups
              </h1>
            </div>
            <img
              src="/images/check-p.svg"
              alt=""
              className="opacity-20 check p-4"
            />
          </div>

          <div
            ref={rdiv5}
            className="xl:w-[600px] xl:h-[150px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md: rounded-[20px] border border-[#D3CECE] bg-white flex items-center justify-between"
          >
            <div className="flex items-center gap-8 p-1">
              <img src="/images/Rectangle 758 (5).svg" alt="" />
              <h1
                className="text-[#4C4C4C] text-[20px]"
                style={{ fontFamily: "bold-r" }}
              >
                Analyze & Improve
              </h1>
            </div>
            <img
              src="/images/check-p.svg"
              alt=""
              className="opacity-20 check p-4"
            />
          </div>

          <div
            ref={rdiv6}
            className="xl:w-[600px] xl:h-[150px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md: rounded-[20px] border border-[#D3CECE] bg-white flex items-center justify-between"
          >
            <div className="flex items-center gap-8 p-1">
              <img src="/images/Rectangle 758 (6).svg" alt="" />
              <h1
                className="text-[#4C4C4C] text-[20px]"
                style={{ fontFamily: "bold-r" }}
              >
                Final Step
              </h1>
            </div>
            <img
              src="/images/check-p.svg"
              alt=""
              className="opacity-20 check p-4"
            />
          </div>
        </div>
        <div className="lg:flex flex-col items-center gap-6 hidden">
          <p
            style={{ fontFamily: "regular" }}
            className="text-sm sm:text-base text-[#898989] w-1/2 text-center"
          >
            Let SmartAgents do the hard work, so your team can focus on the deal
            work
          </p>
          <Buttons text={"Book A Demo"} />
        </div>
      </div>
    </div>
  );
};

export default ScrollReveal;
