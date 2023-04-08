import React from "react";
import Spline from "@splinetool/react-spline";
import backgroundImage from "/background.jpg";
import "./Home.css";
import Countdown from "../../components/shared/Countdown";
import ParticleBackground from "../../components/shared/ParticleBackground";

const Home = () => {
  return (
    <div
      className="h-screen w-full m-0"
      // style={{
      //   backgroundImage: `url(https://wallpapercave.com/wp/wp8017879.jpg)`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center center",
      // }}
    >
      <ParticleBackground/>
      <div className="top-10 h-full flex justify-center items-center flex-col ">
        <div className="h-3/4 w-full">
          <Spline scene="https://prod.spline.design/vakXcAJXStGdHotW/scene.splinecode"  />
        </div>
        <div style={{ marginTop: "-160px" }}>
        <Countdown  />
        </div>
      </div>
    </div>
  );
};

export default Home;
