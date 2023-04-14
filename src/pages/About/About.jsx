import React from "react";
import Spline from "@splinetool/react-spline";
import ParticleBackground from "../../components/shared/ParticleBackground";
import bgPattern from "../../assets/events/pattern.webp"

const About = () => {
  return (
    <div className='bg-black' style={{ backgroundImage: `url(${bgPattern})`, backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
      <div className="container mx-auto flex flex-col justify-center items-center py-16 px-4 md:px-8 h-screen">
        <div className="w-full lg:w-10/12 bg-gray-100 bg-opacity-75 rounded-lg shadow-lg p-8 flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-4/12 mb-8 lg:mb-0 lg:mr-8">
          <Spline scene="https://prod.spline.design/nah8ZYm1kfWoaNPW/scene.splinecode"  />
          </div>
          <div className="w-full lg:w-8/12">
            <h2 className="text-3xl font-bold mb-4">About the Festival</h2>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
              libero eget est commodo iaculis. Nullam auctor, elit in fermentum
              commodo, elit elit convallis turpis, vel imperdiet sapien magna sed
              enim. Sed convallis lacinia tellus, eu commodo enim dignissim vel.
              Nulla facilisi.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Sed sit amet nibh id nulla ullamcorper malesuada. Quisque finibus
              vehicula felis, ac vulputate ante venenatis vel. Proin eleifend
              pharetra nulla sed blandit. Nulla eget enim a purus maximus lobortis
              non non nibh. Aenean elementum sem at sagittis molestie. Duis eget
              ante libero. In et tortor massa. Ut vel dolor diam. Sed consequat id
              elit sit amet congue. Nulla nec ipsum et nisi facilisis mollis vitae
              nec velit. Vivamus eget ipsum ullamcorper, sollicitudin mi ut,
              ullamcorper eros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
