import React, { useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FooterContent = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });

      tl.from(".footer-top > *", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
      })
        .from(".footer-grid > div", {
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        })
        .from(".footer-newsletter > *", {
          opacity: 0,
          y: 30,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.15,
        })
        .from(".footer-bottom > div", {
          opacity: 0,
          y: 20,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.1,
        });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={footerRef}
      className="w-full shadow-[#898989] shadow-2xl bg-white"
    >
      <div className="footer-top flex flex-col items-start lg:flex-row lg:items-center lg:justify-around px-4 md:px-8 lg:px-[26px] pt-10 lg:pt-20">
        <div className="mb-8 lg:mb-0">
          <img src="/images/Vector.svg" alt="" className="mx-auto lg:mx-0" />
        </div>

        <div className="w-full lg:w-[439px] px-4 mb-8 lg:mb-0">
          <p
            style={{ fontFamily: "regular" }}
            className="text-base md:text-[15px] text-[#898989] "
          >
            AI-native Outbound OS built for SDRs, agencies, and GTM teams who
            want to scale with intelligence.
          </p>
        </div>

        <div className="flex items-center gap-6 mb-8 lg:mb-0">
          {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
            <div
              key={i}
              className="group transition-transform duration-300 hover:scale-110"
            >
              <Icon className="text-2xl sm:text-3xl text-[#6E58F1] group-hover:text-[#5a46df]" />
            </div>
          ))}
        </div>

        <div className="flex items-center sm:gap-8">
          <img src="/images/Badges.svg" alt="" className="h-10 sm:h-12" />
          <img src="/images/Group.svg" alt="" className="h-10 sm:h-12" />
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-[26px] mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:mx-[70px]">
        {[
          {
            title: "Product",
            items: [
              "Premium Deliverability",
              "Unified Master Box",
              "White labelling",
              "Powerful APIs",
              "Unlimited Email Wamsup",
              "Follow-up Automation",
              "Mobile App",
            ],
          },
          {
            title: "Comparisons",
            items: [
              "Smartlead Vs Lemlist",
              "Smartlead Vs Outreach.io",
              "Smartlead Vs Mailshake",
              "Smartlead Vs Outreachbin",
              "Smartlead Vs Klenty",
              "Smartlead Vs Quickmail",
              "Smartlead Vs Saleshandy",
            ],
          },
          {
            title: "Resources",
            items: [
              "Blogs",
              "Cold Outreach Template",
              "White labelling",
              "Email Generator",
              "FAQs",
              "Tools And Comparisons",
              "Guides and eBooks",
            ],
          },
          {
            title: "Legal",
            items: [
              "Privacy Policy",
              "Ts & Cs",
              "White labelling",
              "Fair Use Policy",
              "DPA",
              "Don't Sell My Data",
            ],
          },
          {
            title: "Company",
            items: [
              "What’s New",
              "Careers",
              "White labelling",
              "Affiliate Partners",
            ],
          },
        ].map((section, idx) => (
          <div key={idx}>
            <h1
              style={{ fontFamily: "medium" }}
              className="text-xl sm:text-2xl pb-4 text-[#0A0A0A]"
            >
              {section.title}
            </h1>
            <ul
              style={{ fontFamily: "regular" }}
              className="text-sm sm:text-lg text-[#898989] leading-relaxed space-y-2"
            >
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="hover:text-[#6E58F1] transition-colors duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-[26px] lg:mx-[70px]">
        <div className="mt-16 lg:mt-20 flex flex-col gap-6 lg:gap-8">
          <h1
            style={{ fontFamily: "medium" }}
            className="text-2xl sm:text-3xl text-[#0A0A0A]"
          >
            Newsletter
          </h1>

          <p
            style={{ fontFamily: "regular" }}
            className="text-sm sm:text-base text-[#898989]"
          >
            Get 1 hot deliverability tip each week
          </p>

          <div
            style={{ fontFamily: "regular" }}
            className="flex w-full sm:w-auto max-w-full lg:max-w-md items-center border border-[#898989] rounded-full overflow-hidden"
          >
            <input
              type="text"
              placeholder="Email Address"
              className="flex-grow pl-4 py-2 sm:py-3 text-sm sm:text-base text-[#7A7E92] outline-none"
            />
            <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#6E58F1] flex justify-center items-center hover:bg-[#5b46e0] transition-colors duration-300">
              <FaArrowRight className="text-lg sm:text-xl text-white" />
            </button>
          </div>
        </div>
        <div className="mt-20 mr-10">
          <img src="/images/image 12.svg" alt="" className="xl:w-[250px]"/>
        </div>
      </div>

      <hr className="w-11/12 mx-auto mt-16 lg:mt-20 border-t border-[#DDDDDD]" />

      <div className="footer-bottom flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 p-8">
        {[
          "A Five2one Product",
          "Made with ❤ in Sunny Sydney 🇦🇺",
          "Copyright © 2025 SmartLead.AI | All Rights Reserved",
        ].map((text, i) => (
          <div key={i} className="px-4 border-x border-[#DDDDDD]">
            <h1
              style={{ fontFamily: "regular" }}
              className="text-base sm:text-lg"
            >
              {text}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterContent;
