import React, { useState, useEffect } from "react";
import "./MouseTrail.css";

const MouseTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { pageX, pageY } = event;
    setMousePosition({ x: pageX, y: pageY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const starCount = 30;
  const stars = [];

  for (let i = 0; i < starCount; i++) {
    stars.push(
      <div
        key={i}
        className="star"
        style={{
          left: mousePosition.x + Math.random() * 20 - 10,
          top: mousePosition.y + Math.random() * 20 - 10,
          animationDelay: `${Math.random()}s`,
        }}
      />
    );
  }

  return <div className="mouse-trail">{stars}</div>;
};

export default MouseTrail;
