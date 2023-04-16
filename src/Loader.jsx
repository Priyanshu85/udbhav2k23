import React from "react";
import logo from "./assets/loadimage.png";
import loadImage from "./assets/loadback.jpg";

function Loader() {
  return (
    <div
      className="h-screen w-screen text-white font-bold flex justify-center items-center"
      style={{
        backgroundImage: `url(${loadImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Loader;
