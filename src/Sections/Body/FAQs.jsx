import React from "react";
import FAQcontent from "../../components/Content/FAQcontent";
import { FAQlist } from "../../components/FAQ/FAQlist";
import { sampleFaqs } from "../../constants/app";
const FAQs = () => {
  return (
    <div className=" w-full min-h-screen flex flex-col justify-center items-center">
      <FAQcontent />
      <FAQlist faqs={sampleFaqs} colorScheme="blue" searchable />
    </div>
  );
};

export default FAQs;
