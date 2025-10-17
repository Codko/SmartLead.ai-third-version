import React, { useState, forwardRef } from "react";

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 12H4"
    />
  </svg>
);

const FAQlist = forwardRef(
  (
    { faqs, title = "Frequently Asked Questions", className = "", ...props },
    ref
  ) => {
    const [openItems, setOpenItems] = useState(new Set());
    const [searchTerm, setSearchTerm] = useState("");

    const toggleItem = (index) => {
      const newOpenItems = new Set(openItems);
      if (newOpenItems.has(index)) newOpenItems.delete(index);
      else newOpenItems.add(index);
      setOpenItems(newOpenItems);
    };

    const filteredFaqs = faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div
        ref={ref}
        className={`w-full max-w-6xl mx-auto p-6 space-y-8 ${className}`}
        {...props}
      >

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openItems.has(index);
            const displayIndex = faq.index ?? index + 1;

            return (
              <div
                key={index}
                className={`group border-2 rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl backdrop-blur-sm border-[#DDDDDD] hover:border-[#DDDDDD] ${
                  isOpen ? "bg-[#F9F9F9]" : "bg-transparent"
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      
                      <div className="w-8 h-8 rounded-full flex items-center justify-center">
                      </div>
                      <h3 style={{fontFamily:"regular"}} className="text-lg md:text-xl font-semibold text-[#898989] group-hover:text-gray-900 transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`transition-transform duration-500 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </div>
                  </div>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="pl-12">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
                      <p style={{fontFamily:"regular"}} className="text-[#898989] leading-relaxed text-base md:text-lg animate-fadeIn">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

FAQlist.displayName = "FAQ";
export { FAQlist };
