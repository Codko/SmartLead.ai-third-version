import React, { useState, useEffect } from "react";

const FadeDiv = ({ show, children }) => {
  const [visible, setVisible] = useState(show);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (show) {
      setVisible(true);
      setAnimationClass("animate__animated animate__fadeInDown");
    } else if (visible) {
      setAnimationClass("animate__animated animate__fadeInUp");
    }
  }, [show]);

  const handleAnimationEnd = () => {
    if (!show) {
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <div className={animationClass} onAnimationEnd={handleAnimationEnd}>
      {children}
    </div>
  );
};
export default FadeDiv;
