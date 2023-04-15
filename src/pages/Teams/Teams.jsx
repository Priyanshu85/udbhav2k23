import React from "react";
import { CardOverlay } from "../../components/shared/Teams/Teamscards";
import "./teams.css";
import { AiOutlineDownCircle } from "react-icons/ai";
import HEROsvg from "../../assets/Teams/HERO.svg";
import { TeamMember } from "../../data/data";
import Members from "../../data/members.json"
import bgPattern from "../../assets/events/pattern.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Teams = () => {
  const cards = TeamMember.map((data) => {
    return <CardOverlay {...data} key={data.id} />;
  });
  const Cultural= Members.Cultural.org.map(data=>{
    return(
        <h1 className="text-lg py-1">{data.name}</h1>
    )
  })
  const Tech= Members.Techinal.org.map(data=>{
    return(
        <h1 className="text-lg py-1">{data.name}</h1>
    )
  })
  const FineArts= Members["Fine-Arts"].org.map(data=>{
    return(
        <h1 className="text-lg py-1">{data.name}</h1>
    )
  })
  const Literary= Members.Literary.org.map(data=>{
    return(
        <h1 className="text-lg py-1">{data.name}</h1>
    )
  })
  const Fundo= Members.Fundo.org.map(data=>{
    return(
        <h1 className="text-lg py-1">{data.name}</h1>
    )
  })

  function handlescroll() {
    document
      .getElementById("team")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <div className="w-full bg-black">
      <div className="team-main lg:w-full m-0 ">
        <div className="page">
          <div className="grid p-14 md:gap-24 lg:grid-cols-1 lg:justify-center xl:grid-cols-2">
            <div className="px-0">
              <h1 className="text-orange-500 font-extralight sm: text-6xl md:text-7xl lg:text-7xl xl:text-9xl">
                Our Team
              </h1>
              <h3 className="text-2xl font-bold py-5 text-sky-500">Meet Entire Team</h3>
              <p className="pt-5 pb-32 xs:text-sm md:text-md ">
                Our team comprises passionate individuals who are dedicated to
                organizing a successful Udbhav 2023. From event management to
                creative design, they bring a diverse range of skills and
                expertise to the table. With a shared commitment to excellence
                and teamwork, they are driven to make the fest a memorable
                experience for everyone.
              </p>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-16 md:gap-32 lg:gap-32">
                <div>
                  <h2 className="text-3xl pb-2 font-bold text-sky-500">
                    CULTURE
                  </h2>
                  <p className="xs:text-sm md:text-md ">
                    The culture of our team at Udbhav 2023 is one of
                    collaboration, creativity, and inclusivity. We value diverse
                    perspectives and encourage open communication to foster a
                    supportive environment. Our team is passionate about
                    delivering an exceptional event and we strive to achieve
                    excellence in all that we do.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl pb-2 font-bold text-sky-500">WORK</h2>
                  <p className="xs:text-sm md:text-md ">
                    Our team works collaboratively to bring innovative and
                    creative ideas to life. With a passion for excellence, we
                    aim to deliver exceptional results and exceed expectations.
                    Our focus on teamwork and attention to detail ensures that
                    we deliver high-quality work that meets the diverse needs of
                    our clients.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <LazyLoadImage src={HEROsvg} alt="Hero-svg" className="HERO-img z-10" />
            </div>
          </div>
          <div className="grid grid-rows-1 xl:h-48 pb-10 justify-center">
            <button className="text-3xl" onClick={handlescroll}>
              <AiOutlineDownCircle />
            </button>
          </div>
        </div>
        {/* Team Memebrs */}
        <div id="team">
          <div className="text-center">
            <h2 className="text-4xl font-bold">CORE TEAM</h2>
            <h1 className="text-5xl text-amber-400 font-extrabold">MEMBERS</h1>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="grid card-grid gap-y-8 gap-x-10 sm:gap-x-16 justify-center grid-cols-2 xs:grid-cols-2 xs:justify-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 py-32 px-5 md:px-14">
            {cards}
          </div>
          </div>

          <h1 className="text-4xl text-center text-amber-400 font-extrabold">ORGANIZERS</h1>

          <div className="flex pt-5 justify-center">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-12 rounded-3xl py-12  gap-14 justify-center">
              <div><h1 className="text-2xl font-bold pb-10">CULTURAL</h1>{Cultural}</div>
              <div><h1 className="text-2xl font-bold pb-10">TECHNICAL</h1>{Tech}</div>
              <div><h1 className="text-2xl font-bold pb-10">FINE-ARTS</h1>{FineArts}</div>
              <div><h1 className="text-2xl font-bold pb-10">LITERARY</h1>{Literary}</div>
              <div><h1 className="text-2xl font-bold pb-10">FUNDO</h1>{Fundo}</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
