import React from "react";
import Hero from "./Sections/Hero";
import Section2 from "./Sections/Body/Section2";
import Section3 from "./Sections/Body/Section3";
import Section4 from "./Sections/Body/Section4";
import Section5 from "./Sections/Body/Section5";
import Bar from "./components/Bar/Bar";
import Testimonials from "./Sections/Body/Testimonials";
import Footer from "./Sections/Footer";
import FAQs from "./Sections/Body/FAQs";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";
import Lastbar from "./components/Bar/Lastbar";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Section2 />
      <div className="-mt-[1800px] lg:-mt-[1700px]">
        <ScrollReveal />
      </div>
      <div>
        <Section3 />
      </div>
      <Section4 />
      <Section5 />
      <Testimonials />
      <FAQs />
      <Lastbar />
      <Footer />
    </div>
  );
};

export default App;
