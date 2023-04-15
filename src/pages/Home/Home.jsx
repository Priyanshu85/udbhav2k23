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
      className="min-h-screen lg:w-full m-0"
    >
      <ParticleBackground />
      <div className="top-10 h-full flex justify-center items-center flex-col ">
        <div className="h-3/4 lg:w-full w-full">
          <Spline scene="https://prod.spline.design/nah8ZYm1kfWoaNPW/scene.splinecode" />
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