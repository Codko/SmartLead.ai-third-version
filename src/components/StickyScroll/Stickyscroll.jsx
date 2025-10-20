"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    console.log(closestBreakpointIndex);
    setActiveCard(closestBreakpointIndex);
  });

  useEffect(() => {
    console.log(activeCard);
  }, [activeCard]);

  return (
    <motion.div
      className="relative flex h-[30rem] justify-center space-x-20 overflow-y-auto rounded-md p-10 bg-transparent scrollbar-hide "
      ref={ref}
    >
      <div
        style={{ fontFamily: "bold" }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md  lg:flex lg:items-center lg:justify-center 2xl:text-[150px] lg:text-[80px] sm:text-[60px] text-[50px] opacity-5",
          contentClassName
        )}
      >
        {content[activeCard].number ?? null}{" "}
        <h1 className="2xl:text-[80px] lg:text-[60px] sm:text-[40px] text-[30px] ">
          /0
        </h1>{" "}
        <h1 className="2xl:text-[80px] lg:text-[60px] sm:text-[40px] text-[30px] ">
          {cardLength - 1}
        </h1>
      </div>
      <motion.div
        key={activeCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ background: "transparent" }}
        className={cn(
          "sticky top-10 hidden lg:block lg:h-60 lg:w-80 overflow-hidden rounded-md bg-white ",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
      <div className="div relative flex items-start px-8">
        <div className="max-w-xl lg:max-w-4xl w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                style={{ fontFamily: "bold-r" }}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="lg:text-[32px] text-[20px] font-bold text-[#242323]"
              >
                {item.title}
              </motion.h2>
              <motion.p
                style={{ fontFamily: "regular" }}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="lg:text-[18px]  mt-10 max-w-xl text-[#848884]"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
    </motion.div>
  );
};
