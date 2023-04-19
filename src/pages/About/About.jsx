import React from "react";
import bgPattern from "../../assets/Teams/pattern2.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MP from "../../assets/About/megaphone.png"
import dance from "../../assets/About/dance.jpg"
import band from "../../assets/About/band.jpg"
import sing from "../../assets/About/sing.jpg"
import performance from "../../assets/About/performance.jpg"
import HeroAbout from "../../assets/About/HeroAbout.jpg"
import "./About.css"

const datalist=[
  {
    "id":"1",
    "image":dance
  },
  {
    "image":band
  },
  {
    "image":sing
  },
  {
    "image":performance
  },
];

const About = () => {

  const card= datalist.map(data=>{
    return(
      // <div
      //   style={{
      //   backgroundImage:`linear-gradient(128deg, #0000006b 0%, #0000006b 100%), url(${data.image})`,
      //   backgroundPosition:"center",
      //   backgroundRepeat:"no-repeat",
      //   height:"50vh"
      //   }}
      // ></div>
      <LazyLoadImage src={data.image} className="load-image w-64 md:w-auto"/>
    )
  })
  return (
    <div
      className="bg-black aboutus"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      }}
    >
      {/* <div className="h-full object-cover">
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
      </div> */}
      <div>
        <div style={{
          backgroundImage:`url(${HeroAbout})`,
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat",
          backgroundPosition:"center"
        }}>
          <h2 className="text-lg sm:text-2xl md:text-3xl py-5 text-sky-400 text-center">About<h1 className="text-amber-600 text-3xl md:text-6xl leading-3 font-bold">Udbhav 2k23</h1></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center hero-about gap-32 px-14 text-white" >
            <div className="text-left">
              <h1 className="text-5xl md:text-8xl font-bold text-amber-600">Udhbhav <h1 className="text-sky-400">2k23</h1></h1>
              <h2 className="text-xl md:text-4xl w-8/12">a carnival excitement and adventure awaits you!</h2>
            </div>
            <div className="text-right lg:pl-52 xl:pl-64 2xl:pl-72">
              <h1 className="text-4xl md:text-6xl font-bold text-amber-600">April 28-29</h1>
              <h3 className="text-lg md:text-2xl text-sky-200">Inderprastha Engineering College, Sahibabad, Ghaziabad</h3>
              <h2 className="text-xl md:text-4xl lg:pl-0 2xl:pl-24">Gear up for an unforgettable experience at  the most awaited college fest!</h2>
            </div>
          </div>
          

        </div>
      </div>

      <div className="grid grid-rows-1 justify-center bg-white px-10 md:px-24 xl:pl-64">
        <div className="grid lg:grid-cols-1 xl:grid-cols-2 xs:gap-y-5 gap-x-20 items-center">
          <div className="text-left py-32">
          <h2 className="text-amber-600 text-2xl md:text-5xl">What is</h2>
            <h1 className="text-sky-400 font-extrabold text-5xl md:text-7xl">Udhbav <span className="text-amber-600">2k23 ?</span></h1>
            <p className="pt-12 text-md md:text-lg xl:w-10/12">Udbhav 2k23 is an annual festival organized by Inderprastha Engineering College, that offers a perfect blend of Technical, Cultural, Literary, and Fun events. The festival aims to provide a platform for students to showcase their talents and skills in various fields. It's a grand celebration of art, culture, and creativity, where participants can compete in various competitions, attend inspiring workshops, and engage in entertaining activities. Udbhav 2k23 promises to be an unforgettable experience, where participants can meet like-minded individuals and create lasting memories. Join us on this exciting journey and be a part of something great and distinguished.</p>
          </div>
          <div>
          <LazyLoadImage src={MP} className="w-full"/>
          </div>
        </div>
        {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center content-center justify-center py-24">
          <div className="text-left lg:w-8/12">
            <h2 className="text-amber-600 text-5xl">What is</h2>
            <h1 className="text-sky-400 font-extrabold text-7xl">Udhbav <span className="text-amber-600">2k23 ?</span></h1>
            <p className="pt-12 text-lg">Udbhav 2k23 is an annual festival organized by Inderprastha Engineering College, that offers a perfect blend of Technical, Cultural, Literary, and Fun events. The festival aims to provide a platform for students to showcase their talents and skills in various fields. It's a grand celebration of art, culture, and creativity, where participants can compete in various competitions, attend inspiring workshops, and engage in entertaining activities. Udbhav 2k23 promises to be an unforgettable experience, where participants can meet like-minded individuals and create lasting memories. Join us on this exciting journey and be a part of something great and distinguished.</p>
          </div>
          <LazyLoadImage src={MP} className="justify-center"/>
        </div> */}
      </div>

      <div className="grid grid-rows-1 justify-center py-12">
          <div className="text-center text-white">
            <h2 className="text-xl">Be ready to witness the talents of young minds at </h2>
            <h1 className="text-3xl text-amber-600 font-extrabold">Udbhav 2k23</h1>
            <h2 className="text-sky-400 text-lg">IPEC's annual Fest</h2>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 2xl:grid-cols-4 justidy-center gap-x-12 pl-14 md:pl-16 md:px-0 py-12">
            {card}
          </div>
      </div>
      </div>
  );
};

export default About;
