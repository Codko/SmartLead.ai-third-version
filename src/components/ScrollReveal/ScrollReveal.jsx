"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Buttons from "../Button/Buttons";
import { SlEnergy } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";
gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = () => {
  const [leftCount, setLeftCount] = useState(0);
  const [rightCount, setRightCount] = useState(0);
  const containerRef1 = useRef(null);
  const div1 = useRef(null);
  const div2 = useRef(null);
  const div3 = useRef(null);
  const div4 = useRef(null);
  const div5 = useRef(null);
  const div6 = useRef(null);
  const div7 = useRef(null);
  const div8 = useRef(null);
  const div9 = useRef(null);

  const containerRef2 = useRef(null);
  const rdiv1 = useRef(null);
  const rdiv2 = useRef(null);
  const rdiv3 = useRef(null);
  const rdiv4 = useRef(null);
  const rdiv5 = useRef(null);
  const rdiv6 = useRef(null);

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1280;

    const leftDistance = isMobile ? 145 : isTablet ? 160 : 160;
    const rightDistance = isMobile ? 145 : isTablet ? 160 : 160;
    const animateSet = (
      refs,
      container,
      setCounter,
      distance = 60,
      timelineOffset = 0.3,
      scrollEnd = 2200
    ) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 5%",
          end: `+=${scrollEnd}`,
          pin: true,
          scrub: 1.5,
          onUpdate: (self) => {
            const progress = self.progress; // 0 → 1
            const count = Math.round(progress * refs.length);
            setCounter(count);
          },
        },
      });

      refs.forEach((divRef, i) => {
        const icon = divRef.current?.querySelector(".check");

        tl.to(
          divRef.current,
          { y: -distance * (i + 1), duration: 5, ease: "expoScale" },
          i * timelineOffset
        );

        if (icon) {
          tl.to(
            icon,
            { opacity: 1, delay: 0.5, duration: 0.6, ease: "power1.out" },
            "<"
          );
        }
      });

      if (container === containerRef2) {
        tl.to({}, { duration: 1 });
      }
    };
    animateSet(
      [div1, div2, div3, div4, div5, div6, div7, div8, div9],
      containerRef1,
      setLeftCount,
      leftDistance,
      1.5,
      2200
    );

    animateSet(
      [rdiv1, rdiv2, rdiv3, rdiv4, rdiv5, rdiv6],
      containerRef2,
      setRightCount,
      rightDistance,
      0.2,
      2200
    );
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-center  lg:gap-10 -mt-[700px] lg:mt-0 px-4 lg:px-0 p-4">
      <div>
        <div ref={containerRef1} className="flex flex-col items-center gap-28">
          <div className="xl:w-[600px] xl:h-[70px] w-[300px]  h-[100px] md:w-[500px] md:h-[125px] md: rounded-[10px] bg-[#242323] flex items-center justify-center ">
            <h1
              className="text-white lg:text-[23px] text-[20px] flex gap-4 items-center"
              style={{ fontFamily: "bold-r" }}
            >
              Manual Process{" "}
              <div className="xl:w-[80px] w-[60px] h-12 xl:h-10 bg-[#4C4C4C] rounded-2xl border-4 border-[#3b3939] text-white flex justify-center items-center ">
                <h1 className="text-white text-[23px]">{leftCount + 1}</h1>
              </div>
              <span className="text-[18px]">Hours</span>
            </h1>
          </div>

          <div className="xl:w-[600px]  w-[300px]  md:h-[100px] h-[70px] md:w-[500px]  md: rounded-[10px] border border-[#D3CECE] bg-white flex items-start justify-between">
            <CiClock2 className="text-[32px] m-2" />
            <div className="flex items-center gap-8 px-2 pt-2">
              <div>
                <h1
                  className="text-[#4C4C4C] lg:text-[18px] text-[14px]"
                  style={{ fontFamily: "bold-r" }}
                >
                  Define Target Audience
                </h1>
                <p
                  style={{ fontFamily: "regular" }}
                  className="text-[#848884] lg:text-[14px] text-[10px] mt-2 lg:mt-3"
                >
                  <span className="block md:hidden">
                    Give your sales team the freedom...
                  </span>

                  <span className="hidden md:block">
                    Give your sales team the freedom from doing unwanted manual,
                    repetitive tasks. Stop juggling between tools.
                  </span>
                </p>
              </div>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="check p-1 pt-4 w-[40px]  h-[40px]"
            />
          </div>

          <div
            ref={div1}
            className="xl:w-[600px]  w-[300px]  md:h-[100px] h-[70px] md:w-[500px]  md: rounded-[10px] border border-[#D3CECE] bg-white flex items-start justify-between"
          >
            <CiClock2 className="text-[32px] m-2" />
            <div className="flex items-center gap-8 px-2 pt-2">
              <div>
                <h1
                  className="text-[#4C4C4C] lg:text-[18px] text-[14px]"
                  style={{ fontFamily: "bold-r" }}
                >
                  Source Leads Manually
                </h1>
                <p
                  style={{ fontFamily: "regular" }}
                  className="text-[#848884] lg:text-[14px] text-[10px] mt-2 lg:mt-3"
                >
                  <span className="block md:hidden">
                    Give your sales team the freedom...
                  </span>

                  <span className="hidden md:block">
                    Give your sales team the freedom from doing unwanted manual,
                    repetitive tasks. Stop juggling between tools.
                  </span>
                </p>
              </div>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="opacity-10 check p-1 pt-4 h-[40px] w-[40px]"
            />
          </div>

          <div
            ref={div2}
            className="xl:w-[600px]  w-[300px]  md:h-[100px] h-[70px] md:w-[500px]  md: rounded-[10px] border border-[#D3CECE] bg-white flex items-start justify-between "
          >
            <CiClock2 className="text-[32px] m-2" />
            <div className="flex items-center gap-8 px-2 pt-2">
              <div>
                <h1
                  className="text-[#4C4C4C] lg:text-[18px] text-[14px]"
                  style={{ fontFamily: "bold-r" }}
                >
                  Clean & Format Lead Data
                </h1>
                <p
                  style={{ fontFamily: "regular" }}
                  className="text-[#848884] lg:text-[14px] text-[10px] mt-2 lg:mt-3"
                >
                  <span className="block md:hidden">
                    Give your sales team the freedom...
                  </span>

                  <span className="hidden md:block">
                    Give your sales team the freedom from doing unwanted manual,
                    repetitive tasks. Stop juggling between tools.
                  </span>
                </p>
              </div>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="opacity-10 check p-1 pt-4 h-[40px] w-[40px]"
            />
          </div>

          <div
            ref={div3}
            className="xl:w-[600px]  w-[300px]  md:h-[100px] h-[70px] md:w-[500px]  md: rounded-[10px] border border-[#D3CECE] bg-white flex items-start justify-between"
          >
            <CiClock2 className="text-[32px] m-2" />
            <div className="flex items-center gap-8 px-2 pt-2">
              <div>
                <h1
                  className="text-[#4C4C4C] lg:text-[18px] text-[14px]"
                  style={{ fontFamily: "bold-r" }}
                >
                  Enrich Lead Details
                </h1>
                <p
                  style={{ fontFamily: "regular" }}
                  className="text-[#848884] lg:text-[14px] text-[10px] mt-2 lg:mt-3"
                >
                  <span className="block md:hidden">
                    Give your sales team the freedom...
                  </span>

                  <span className="hidden md:block">
                    Give your sales team the freedom from doing unwanted manual,
                    repetitive tasks. Stop juggling between tools.
                  </span>
                </p>
              </div>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="opacity-10 check p-1 pt-4 h-[40px] w-[40px] "
            />
          </div>

          <div
            ref={div4}
            className="xl:w-[600px]  w-[300px]  md:h-[100px] h-[70px] md:w-[500px]  md: rounded-[10px] border border-[#D3CECE] bg-white flex items-start justify-between"
          >
            <CiClock2 className="text-[32px] m-2" />
            <div className="flex items-center gap-8 px-2 pt-2">
              <div>
                <h1
                  className="text-[#4C4C4C] lg:text-[18px] text-[14px]"
                  style={{ fontFamily: "bold-r" }}
                >
                  Write Outreach Copy{" "}
                </h1>
                <p
                  style={{ fontFamily: "regular" }}
                  className="text-[#848884] lg:text-[14px] text-[10px] mt-2 lg:mt-3"
                >
                  <span className="block md:hidden">
                    Give your sales team the freedom...
                  </span>

                  <span className="hidden md:block">
                    Give your sales team the freedom from doing unwanted manual,
                    repetitive tasks. Stop juggling between tools.
                  </span>
                </p>
              </div>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="opacity-10 check p-1 pt-4 h-[40px] w-[40px]"
            />
          </div>

          <div
            ref={div5}
            className="xl:w-[600px]  w-[300px]  md:h-[100px] h-[70px] md:w-[500px]  md: rounded-[10px] border border-[#D3CECE] bg-white flex items-start justify-between"
          >
            <CiClock2 className="text-[32px] m-2" />
            <div className="flex items-center gap-8 px-2 pt-2">
              <div>
                <h1
                  className="text-[#4C4C4C] lg:text-[18px] text-[14px]"
                  style={{ fontFamily: "bold-r" }}
                >
                  Upload into CRM or Email Tool
                </h1>
                <p
                  style={{ fontFamily: "regular" }}
                  className="text-[#848884] lg:text-[14px] text-[10px] mt-2 lg:mt-3"
                >
                  <span className="block md:hidden">
                    Give your sales team the freedom...
                  </span>

                  <span className="hidden md:block">
                    Give your sales team the freedom from doing unwanted manual,
                    repetitive tasks. Stop juggling between tools.
                  </span>
                </p>
              </div>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="opacity-10 check p-1 pt-4 h-[40px] w-[40px] "
            />
          </div>

          <div
            ref={div6}
            className="xl:w-[600px]  w-[300px]  md:h-[100px] h-[70px] md:w-[500px]  md: rounded-[10px] border border-[#D3CECE] bg-white flex items-start justify-between"
          >
            <CiClock2 className="text-[32px] m-2" />
            <div className="flex items-center gap-8 px-2 pt-2">
              <div>
                <h1
                  className="text-[#4C4C4C] lg:text-[18px] text-[14px]"
                  style={{ fontFamily: "bold-r" }}
                >
                  Schedule Messages & Follow-ups
                </h1>
                <p
                  style={{ fontFamily: "regular" }}
                  className="text-[#848884] lg:text-[14px] text-[10px] mt-2 lg:mt-3"
                >
                  <span className="block md:hidden">
                    Give your sales team the freedom...
                  </span>

                  <span className="hidden md:block">
                    Give your sales team the freedom from doing unwanted manual,
                    repetitive tasks. Stop juggling between tools.
                  </span>
                </p>
              </div>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="opacity-10 check p-1 pt-4 h-[40px] w-[40px]"
            />
          </div>

          <div
            ref={div7}
            className="xl:w-[600px]  w-[300px]  md:h-[100px] h-[70px] md:w-[500px]  md: rounded-[10px] border border-[#D3CECE] bg-white flex items-start justify-between"
          >
            <CiClock2 className="text-[32px] m-2" />
            <div className="flex items-center gap-8 px-2 pt-2">
              <div>
                <h1
                  className="text-[#4C4C4C] lg:text-[18px] text-[14px]"
                  style={{ fontFamily: "bold-r" }}
                >
                  Monitor Campaign Performance
                </h1>
                <p
                  style={{ fontFamily: "regular" }}
                  className="text-[#848884] lg:text-[14px] text-[10px] mt-2 lg:mt-3"
                >
                  <span className="block md:hidden">
                    Give your sales team the freedom...
                  </span>

                  <span className="hidden md:block">
                    Give your sales team the freedom from doing unwanted manual,
                    repetitive tasks. Stop juggling between tools.
                  </span>
                </p>
              </div>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="opacity-10 check p-1 pt-4 h-[40px] w-[40px]"
            />
          </div>

          <div
            ref={div8}
            className="xl:w-[600px]  w-[300px]  md:h-[100px] h-[70px] md:w-[500px]  md: rounded-[10px] border border-[#D3CECE] bg-white flex items-start justify-between"
          >
            <CiClock2 className="text-[32px] m-2" />
            <div className="flex items-center gap-8 px-2 pt-2">
              <div>
                <h1
                  className="text-[#4C4C4C] lg:text-[18px] text-[14px]"
                  style={{ fontFamily: "bold-r" }}
                >
                  Respond & Nurture Leads
                </h1>
                <p
                  style={{ fontFamily: "regular" }}
                  className="text-[#848884] lg:text-[14px] text-[10px] mt-2 lg:mt-3"
                >
                  <span className="block md:hidden">
                    Give your sales team the freedom...
                  </span>

                  <span className="hidden md:block">
                    Give your sales team the freedom from doing unwanted manual,
                    repetitive tasks. Stop juggling between tools.
                  </span>
                </p>
              </div>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="opacity-10 check p-1 pt-4 h-[40px] w-[40px]"
            />
          </div>

          <div
            ref={div9}
            className="xl:w-[600px]  w-[300px]  md:h-[100px] h-[70px] md:w-[500px]  md: rounded-[10px] border border-[#D3CECE] bg-white flex items-start justify-between"
          >
            <CiClock2 className="text-[32px] m-2" />
            <div className="flex items-center gap-8 px-2 pt-2">
              <div>
                <h1
                  className="text-[#4C4C4C] lg:text-[18px] text-[14px]"
                  style={{ fontFamily: "bold-r" }}
                >
                  Analyze & Optimize
                </h1>
                <p
                  style={{ fontFamily: "regular" }}
                  className="text-[#848884] lg:text-[14px] text-[10px] mt-2 lg:mt-3"
                >
                  <span className="block md:hidden">
                    Give your sales team the freedom...
                  </span>

                  <span className="hidden md:block">
                    Give your sales team the freedom from doing unwanted manual,
                    repetitive tasks. Stop juggling between tools.
                  </span>
                </p>
              </div>
            </div>
            <img
              src="/images/check.svg"
              alt=""
              className="opacity-10 check p-1 pt-4 h-[40px] w-[40px]"
            />
          </div>
        </div>
      </div>

      <div className="-mt-[1200px] lg:-mt-0">
        <div ref={containerRef2} className="flex flex-col items-center gap-28">
          <div className="xl:w-[600px] xl:h-[70px] w-[300px]  h-[80px] md:w-[500px] md:h-[125px] md: rounded-[10px] bg-[#6E58F1] flex items-center justify-center">
            <h1
              className="text-white lg:text-[23px] text-[18px] flex gap-4 items-center"
              style={{ fontFamily: "semi-bold-r" }}
            >
              SmartAgent Process{" "}
              <div className="xl:w-[80px] w-[50px] h-12 xl:h-10 bg-[#FFEE00]  rounded-2xl lg:rounded-[60px] text-black flex justify-center items-center ">
                <SlEnergy className="text-[15px]" />
                <h1
                  style={{ fontFamily: "regular" }}
                  className="text-black lg:text-[18px] text-[12px]"
                >
                  Done
                </h1>
              </div>
              <div className="xl:w-[80px] w-[60px] h-12 xl:h-10 bg-[#7e6ed6] border-4 border-[#827baa] rounded-2xl text-black flex justify-center items-center ">
                <h1 className="text-white text-[23px]">{rightCount}</h1>
              </div>
              <span className="text-[18px]">
                Min<span className="hidden lg:inline-block">utes</span>
              </span>
            </h1>
          </div>

          <div className="xl:w-[600px]  w-[300px]  md:h-[100px] h-[70px] md:w-[500px]  md: rounded-[10px] border border-[#D3CECE] bg-white flex items-start justify-between">
            <SlEnergy className="text-[32px] text-[#7e6ed6] m-2" />
            <div className="flex items-center gap-8 px-2 pt-2">
              <div>
                <div>
                  <h1
                    className="text-[#4C4C4C] lg:text-[18px] text-[14px] "
                    style={{ fontFamily: "bold-r" }}
                  >
                    Define Your Campaign
                  </h1>
                  <p
                    style={{ fontFamily: "regular" }}
                    className="text-[#848884] lg:text-[14px] text-[10px] mt-2 lg:mt-3"
                  >
                    <span className="block md:hidden">
                      Give your sales team the freedom...
                    </span>

                    <span className="hidden md:block">
                      Give your sales team the freedom from doing unwanted
                      manual, repetitive tasks. Stop juggling between tools.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <img
              src="/images/check-p.svg"
              alt=""
              className="check p-1 pt-4 h-[40px] w-[40px] "
            />
          </div>

          <div
            ref={rdiv1}
            className="xl:w-[600px]  w-[300px]  md:h-[100px] h-[70px] md:w-[500px]  md: rounded-[10px] border border-[#D3CECE] bg-white flex items-start justify-between"
          >
            <SlEnergy className="text-[32px] text-[#7e6ed6] m-2" />
            <div className="flex items-center gap-8 px-2 pt-2">
              <div>
                <h1
                  className="text-[#4C4C4C] lg:text-[18px] text-[14px]"
                  style={{ fontFamily: "bold-r" }}
                >
                  Discover Quality Leads
                </h1>
                <p
                  style={{ fontFamily: "regular" }}
                  className="text-[#848884] lg:text-[14px] text-[10px] mt-2 lg:mt-3"
                >
                  <span className="block md:hidden">
                    Give your sales team the freedom...
                  </span>

                  <span className="hidden md:block">
                    Give your sales team the freedom from doing unwanted manual,
                    repetitive tasks. Stop juggling between tools.
                  </span>
                </p>
              </div>
            </div>
            <img
              src="/images/check-p.svg"
              alt=""
              className="opacity-10 check p-1 pt-4 h-[40px] w-[40px]"
            />
          </div>

          <div
            ref={rdiv2}
            className="xl:w-[600px]  w-[300px]  md:h-[100px] h-[70px] md:w-[500px]  md: rounded-[10px] border border-[#D3CECE] bg-white flex items-start justify-between"
          >
            <SlEnergy className="text-[32px] text-[#7e6ed6] m-2" />
            <div className="flex items-center gap-8 px-2 pt-2">
              <div>
                <h1
                  className="text-[#4C4C4C] lg:text-[18px] text-[14px]"
                  style={{ fontFamily: "bold-r" }}
                >
                  Enrich Lead Data
                </h1>
                <p
                  style={{ fontFamily: "regular" }}
                  className="text-[#848884] lg:text-[14px] text-[10px] mt-2 lg:mt-3"
                >
                  <span className="block md:hidden">
                    Give your sales team the freedom...
                  </span>

                  <span className="hidden md:block">
                    Give your sales team the freedom from doing unwanted manual,
                    repetitive tasks. Stop juggling between tools.
                  </span>
                </p>
              </div>
            </div>
            <img
              src="/images/check-p.svg"
              alt=""
              className="opacity-10 check p-1 pt-4 h-[40px] w-[40px]"
            />
          </div>

          <div
            ref={rdiv3}
            className="xl:w-[600px]  w-[300px]  md:h-[100px] h-[70px] md:w-[500px]  md: rounded-[10px] border border-[#D3CECE] bg-white flex items-start justify-between"
          >
            <SlEnergy className="text-[32px] text-[#7e6ed6] m-2" />
            <div className="flex items-center gap-8 px-2 pt-2">
              <div>
                <h1
                  className="text-[#4C4C4C] lg:text-[18px] text-[13px]"
                  style={{ fontFamily: "bold-r" }}
                >
                  Craft Personalized Messages
                </h1>
                <p
                  style={{ fontFamily: "regular" }}
                  className="text-[#848884] lg:text-[14px] text-[10px] mt-2 lg:mt-3"
                >
                  <span className="block md:hidden">
                    Give your sales team the freedom...
                  </span>

                  <span className="hidden md:block">
                    Give your sales team the freedom from doing unwanted manual,
                    repetitive tasks. Stop juggling between tools.
                  </span>
                </p>
              </div>
            </div>
            <img
              src="/images/check-p.svg"
              alt=""
              className="opacity-10 check p-1 pt-4 h-[40px] w-[40px]"
            />
          </div>

          <div
            ref={rdiv4}
            className="xl:w-[600px]  w-[300px]  md:h-[100px] h-[70px] md:w-[500px]  md: rounded-[10px] border border-[#D3CECE] bg-white flex items-start justify-between"
          >
            <SlEnergy className="text-[32px] text-[#7e6ed6] m-2" />
            <div className="flex items-center gap-8 px-2 pt-2">
              <div>
                <h1
                  className="text-[#4C4C4C] lg:text-[18px] text-[14px]"
                  style={{ fontFamily: "bold-r" }}
                >
                  Automate Outreach & Follow-ups
                </h1>{" "}
                <p
                  style={{ fontFamily: "regular" }}
                  className="text-[#848884] lg:text-[14px] text-[10px] mt-2 lg:mt-3"
                >
                  <span className="block md:hidden">
                    Give your sales team the freedom...
                  </span>

                  <span className="hidden md:block">
                    Give your sales team the freedom from doing unwanted manual,
                    repetitive tasks. Stop juggling between tools.
                  </span>
                </p>
              </div>
            </div>
            <img
              src="/images/check-p.svg"
              alt=""
              className="opacity-10 check p-1 pt-4 h-[40px] w-[40px]"
            />
          </div>

          <div
            ref={rdiv5}
            className="xl:w-[600px]  w-[300px]  md:h-[100px] h-[70px] md:w-[500px]  md: rounded-[10px] border border-[#D3CECE] bg-white flex items-start justify-between"
          >
            <SlEnergy className="text-[32px] text-[#7e6ed6] m-2" />
            <div className="flex items-center gap-8 px-2 pt-2">
              <div>
                <h1
                  className="text-[#4C4C4C] lg:text-[18px] text-[14px]"
                  style={{ fontFamily: "bold-r" }}
                >
                  Analyze & Improve
                </h1>
                <p
                  style={{ fontFamily: "regular" }}
                  className="text-[#848884] lg:text-[14px] text-[10px] mt-2 lg:mt-3"
                >
                  <span className="block md:hidden">
                    Give your sales team the freedom...
                  </span>

                  <span className="hidden md:block">
                    Give your sales team the freedom from doing unwanted manual,
                    repetitive tasks. Stop juggling between tools.
                  </span>
                </p>
              </div>
            </div>
            <img
              src="/images/check-p.svg"
              alt=""
              className="opacity-10 check p-1 pt-4 h-[40px] w-[40px] "
            />
          </div>
        </div>
        <div className="lg:flex flex-col items-center gap-6 hidden -mt-[750px] relative z-50">
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
