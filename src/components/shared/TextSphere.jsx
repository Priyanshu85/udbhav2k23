import React, { useEffect } from "react";
import "./TextShpere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "Grazia",
        "Battle Of Bands",
        "WebDev",
        "Waste Innovation",
        "Scrap Art",
        "Sargam",
        "Nature Morte",
        "Tipod",
        "Rangmanch",
        "Jashn-e-Naach",
        "Hand Mandla",
        "Equipoise",
        "Wrapper Skitter",
        "Razzle Dazzle",
        "Street Showdown",
        "The Ink Hand",
        "Jugalbandi"
      ];

      const options = {
        radius: window.innerWidth > 1024 ? 300 :150,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };
      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextShpere;