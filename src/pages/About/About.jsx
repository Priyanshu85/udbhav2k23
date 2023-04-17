import React from "react";
import bgPattern from "../../assets/events/pattern.webp";


const About = () => {
  return (
    <div
      className="bg-black lg:h-screen"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      }}
    >
      <div className="h-full object-cover">
        <div className="h-full container mx-auto flex flex-col justify-center items-center py-16 px-4 md:px-8">
          <div className="w-full lg:w-10/12 bg-gray-100 bg-opacity-75 rounded-lg shadow-lg p-4 flex flex-col lg:flex-row items-center justify-center">
            <div className="w-full lg:w-6/12 mb-8 lg:mb-0 lg:mr-8">
              
            </div>
            <div className="w-full lg:w-6/12">
              <h2 className="text-3xl font-bold mb-4">Udbhav</h2>
              <p className="text-lg leading-relaxed">
                Inderprastha Engineering College organises our yearly festival,
                Udbhav 2k23. Prepare to get sucked into some fierce
                competitions, joyful pronites, thrilling entertainment, and,
                most importantly, to be a part of something great and
                distinguished. 
              </p>
              <p className="text-lg leading-relaxed mt-4">
              Allow us to guide you through a wonderful ecstasy
                packed with hilarious evenings and divine adventures. So, let us
                join this fascinating journey and relish the ravishing
                experience by making our presence known.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
