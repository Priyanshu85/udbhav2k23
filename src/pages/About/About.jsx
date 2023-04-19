import React,{useEffect} from "react";
import bgPattern from "../../assets/Teams/pattern2.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MP from "../../assets/loadimage.png"
import dance from "../../assets/About/dance.webp"
import band from "../../assets/About/band.webp"
import sing from "../../assets/About/sing.webp"
import performance from "../../assets/About/performance.webp"
import HeroAbout from "../../assets/About/HeroAbout.webp"
import Schedule from '../../assets/About/schedule.webp';
import "./About.css"

const datalist=[
  {
    "id":"1",
    "image":dance
  },
  {
    "id":"2",
    "image":band
  },
  {
    "id":"3",
    "image":sing
  },
  {
    "id":"4",
    "image":performance
  },
];

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const card= datalist.map(data=>{
    return(
      <LazyLoadImage key={data.id} src={data.image} className="load-image w-64 md:w-auto"/>
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
      <div>
        <div style={{
          backgroundImage:`url(${HeroAbout})`,
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat",
          backgroundPosition:"center"
        }}>
          <h2 className="text-lg sm:text-2xl md:text-3xl py-5 text-sky-400 text-center">About<div className="text-amber-600 text-3xl md:text-6xl leading-3 font-bold">Udbhav 2k23</div></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center hero-about gap-32 px-14 text-white" >
            <div className="text-left">
              <h1 className="text-5xl md:text-8xl font-bold text-amber-600">Udbhav <div className="text-sky-400">2k23</div></h1>
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
          <div className="text-left py-16 lg:py-32">
          <h2 className="text-amber-600 text-2xl md:text-5xl">What is</h2>
            <h1 className="text-sky-400 font-extrabold text-5xl md:text-7xl">Udbhav <span className="text-amber-600">2k23 ?</span></h1>
            <p className="pt-12 text-md md:text-lg xl:w-10/12">Udbhav 2k23 is an annual festival organized by Inderprastha Engineering College, that offers a perfect blend of Technical, Cultural, Literary, and Fun events. The festival aims to provide a platform for students to showcase their talents and skills in various fields. It's a grand celebration of art, culture, and creativity, where participants can compete in various competitions, attend inspiring workshops, and engage in entertaining activities. Udbhav 2k23 promises to be an unforgettable experience, where participants can meet like-minded individuals and create lasting memories. Join us on this exciting journey and be a part of something great and distinguished.</p>
          </div>
          <div>
          <LazyLoadImage src={MP} className="w-full lg:flex hidden"/>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-1 justify-center py-12">
        <div className=''>
          <h1 className="text-4xl font-black text-center text-amber-600">Schedule</h1>
          <LazyLoadImage src={Schedule} className="w-full p-10"/>
        </div>
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
