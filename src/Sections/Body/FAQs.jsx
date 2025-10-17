import React from "react";
import FAQcontent from "../../components/Content/FAQcontent";
import { FAQlist } from "../../components/FAQ/FAQlist";

const FAQs = () => {
  const sampleFaqs = [
    {
      index: 1,
      question: "What makes this FAQ component special?",
      answer:
        "This FAQ component features modern design with smooth animations, responsive layout, search functionality, and customizable color schemes. It's built with React and Tailwind CSS for optimal performance and beautiful aesthetics.",
    },
    {
      index: 2,
      question: "How do I customize the color scheme?",
      answer:
        "You can pass a prop called `colorScheme` (e.g. blue, purple, green) to the FAQ component to change its theme.",
    },
    {
      index: 3,
      question: "Is it searchable?",
      answer:
        "Yes! If you pass `searchable={true}`, it shows a search input to filter questions.",
    },
    {
      index: 4,
      question: "Can I have animations on FAQ expansion?",
      answer:
        "The FAQ component already animates the answer reveal (slide + fade). You can further enhance with scroll animations externally.",
    },
    {
      index: 5,
      question: "Is it mobile friendly?",
      answer:
        "Yes, it's responsive across screen sizes with Tailwind CSS classes.",
    },
  ];

  return (
    <div className=" w-full min-h-screen flex flex-col justify-center items-center">
      <FAQcontent />
      <FAQlist faqs={sampleFaqs} colorScheme="blue" searchable />
    </div>
  );
};

export default FAQs;
