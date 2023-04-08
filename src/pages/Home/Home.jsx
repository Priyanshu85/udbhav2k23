import React from "react";
import Spline from "@splinetool/react-spline";
import backgroundImage from "../../assets/background.jpg";
import "./Home.css";
import Countdown from "../../components/shared/Countdown";
import ParticleBackground from "../../components/shared/ParticleBackground";

const Home = () => {
  return (
    <div
      className="h-screen w-full m-0"
    >
      <ParticleBackground/>
      <div className="top-10 h-full flex justify-center items-center flex-col ">
        <div className="h-3/4 w-full">
          <Spline scene="https://prod.spline.design/nah8ZYm1kfWoaNPW/scene.splinecode"  />
        </div>
        <div>
        <Countdown  />
        </div>
      </div>
    </div>
  );
};

export default Home;
