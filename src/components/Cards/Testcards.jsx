"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { testData } from "../../constants/app";

gsap.registerPlugin(ScrollTrigger);

const Testcards = () => {
  const cardsRef = useRef([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top center+=100",
            end: "bottom center-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-[90%] xl:w-[80%] 2xl:w-[72%] mt-10 mx-auto flex flex-col gap-6">
      <div
        ref={(el) => (cardsRef.current[0] = el)}
        className="w-full bg-[#F9F9F9] flex flex-col lg:flex-row items-center rounded-[30px] gap-8 overflow-hidden"
      >
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src="/images/lucas.webp"
            alt="person"
            className="rounded-[30px] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] object-cover lg:object-left"
          />
        </div>

        <div className="flex flex-col justify-center gap-6 w-full lg:w-1/2 text-center lg:text-left px-6 sm:px-10 lg:px-0">
          <img
            src="/images/quotes.svg"
            alt="quotes"
            className="mx-auto lg:mx-0 w-[40px] sm:w-[60px]"
          />
          <p className="text-[#848884] text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed">
            Our campaigns weren't just about reaching out, but reaching out
            right, and Smartlead helped us achieve this. It has added immense
            value to our business by prioritizing email deliverability and
            customer needs. I would rate it a 9 out of 10
          </p>

          <div className="flex flex-col items-center lg:items-start gap-4">
            <img
              src="/images/stars.svg"
              alt="stars"
              className="w-[80px] sm:w-[100px] lg:w-[120px]"
            />
            <h1
              style={{ fontFamily: "bold-r" }}
              className="text-[#242323] text-[20px] sm:text-[24px] lg:text-[32px] -mt-4"
            >
              Lucas Maliczak
            </h1>
            <h1
              style={{ fontFamily: "bold-r" }}
              className="text-[#848884] text-[14px] sm:text-[18px] lg:text-[24px] -mt-4"
            >
              Outbound Lead & Partner, Peakora
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-4">
        {testData.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i + 1] = el)}
            className="bg-[#F9F9F9] flex flex-col justify-between rounded-[30px] p-6 sm:p-8 gap-6 sm:gap-8 flex-1"
          >
            <img
              src="/images/gray-q.svg"
              alt="quote"
              className="w-[50px] sm:w-[60px]"
            />
            <p className="text-[14px] sm:text-[16px] text-[#848884] leading-relaxed">
              {item.review}
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src={item.image}
                alt="person"
                className="rounded-[10px] w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] object-cover"
              />
              <div className="flex flex-col gap-4">
                <h1
                  style={{ fontFamily: "bold-r" }}
                  className="text-[#242323] text-[16px] sm:text-[20px] lg:text-[24px]"
                >
                  {item.name}
                </h1>
                <h1
                  style={{ fontFamily: "bold-r" }}
                  className="text-[#848884] text-[12px] sm:text-[14px] lg:text-[18px] -mt-4"
                >
                  {item.founder}
                </h1>
                <img src="/images/stars.svg" alt="stars" className="w-[80px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testcards;
