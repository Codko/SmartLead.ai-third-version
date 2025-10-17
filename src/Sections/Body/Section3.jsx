import React from "react";

const Section3 = () => {
  return (
    <div className="w-full px-4 py-16 -mt-[300px]">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1480px] mx-auto   xl:border-[#E5E7EB]">
        <div className="w-full h-[480px] flex flex-col text-left xl:border-b xl:border-r xl:border-[#E5E7EB] p-8">
          <div className="w-full h-[300px]">
            <img
              src="/video/AI Chat.gif"
              alt="AI Chat"
              className="w-full h-full object-contain"
            />
          </div>
          <h2
            style={{ fontFamily: "bold-r" }}
            className="xl:text-[28px] mt-6 mb-2"
          >
            Automate Outreach, Effortlessly
          </h2>
          <p
            style={{ fontFamily: "regular" }}
            className="text-[#848884] xl:text-[18px]"
          >
            Let Smart Agent handle your outreach from prospecting to follow-ups
            — so you can focus on closing deals.
          </p>
        </div>

        <div className="w-full h-[480px] flex flex-col items-center text-left xl:border-b  xl:border-[#E5E7EB] p-4">
          <div className="w-[400px] h-[300px]">
            <img
              src="/video/Circualr.gif"
              alt=""
              className="w-full h-[300px] object-cover"
            />
          </div>
          <h2
            style={{ fontFamily: "bold-r" }}
            className="xl:text-[28px] mt-6 mb-2 pr-22"
          >
            Integrate Smart Agent with Your Favorite Tools
          </h2>
          <p
            style={{ fontFamily: "regular" }}
            className="text-[#848884] xl:text-[18px] lg:-ml-4 2xl:ml-0 xl:px-4"
          >
            Seamlessly connect Smart Agent with your daily apps to automate
            workflows and amplify results.
          </p>
        </div>

        <div className="w-full h-[480px] flex flex-col text-left xl:border-r xl:border-[#E5E7EB] p-8">
          <div className="w-full h-[300px]">
            <img
              src="/video/Client Email.gif"
              alt="Client Email"
              className="w-full h-full object-contain"
            />
          </div>
          <h2
            style={{ fontFamily: "bold-r" }}
            className="xl:text-[28px] mt-6 mb-2"
          >
            Personalized Outreach at Scale
          </h2>
          <p
            style={{ fontFamily: "regular" }}
            className="text-[#848884] xl:text-[18px]"
          >
            Replace generic templates with smart, dynamic messages tailored to
            each prospect — instantly.
          </p>
        </div>

        <div className="w-full h-[480px] flex flex-col text-left   xl:border-[#E5E7EB] p-8">
          <div className="w-full h-[300px]">
            <img
              src="/video/Track and learn_1.gif"
              alt="Track and Learn"
              className="w-full h-full object-contain"
            />
          </div>
          <h2
            style={{ fontFamily: "bold-r" }}
            className="xl:text-[28px] mt-6 mb-2"
          >
            Track Performance and Learn
          </h2>
          <p
            style={{ fontFamily: "regular" }}
            className="text-[#848884] xl:text-[18px]"
          >
            Get insights on open rates, conversions, and optimize with
            data-backed strategies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
