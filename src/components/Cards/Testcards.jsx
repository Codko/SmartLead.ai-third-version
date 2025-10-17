"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testcards = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
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
            src="/images/person.png"
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
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
              Jhon Doe
            </h1>
          </div>
        </div>
      </div>


      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-4">
        {[1, 2, 3].map((_, i) => (
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src="/images/person.png"
                alt="person"
                className="rounded-[10px] w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] object-cover"
              />
              <div>
                <h1
                  style={{ fontFamily: "bold-r" }}
                  className="text-[#242323] text-[16px] sm:text-[20px] lg:text-[24px]"
                >
                  Jhon Doe
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
