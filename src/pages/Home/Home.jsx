import React from "react";
import Spline from "@splinetool/react-spline";
import backgroundImage from "../../assets/background.jpg";
import "./Home.css";
import Countdown from "../../components/shared/Countdown";
import ParticleBackground from "../../components/shared/ParticleBackground";
import Teaser from "../../components/Home/Teaser";

const Home = () => {
  return (
    <div
      className="min-h-screen lg:w-full bg-center lg:bg-top" style={{
        backgroundImage: `url(${backgroundImage})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <div className="top-10 h-full flex justify-center items-center flex-col ">
        <div className="h-[50vh] lg:h-[70vh] lg:w-full w-full">
          <Spline scene="https://prod.spline.design/nah8ZYm1kfWoaNPW/scene.splinecode"/>
        </div>
        <Countdown />
        <Teaser />
        <div>
        </div>
      </div>
    </div>
  );
};

export default Home;