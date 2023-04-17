import React from 'react'
import './Developers.scss'
import Priyanshu from '../../assets/devs/Priyanshu.jpeg'
import Aneesh from '../../assets/Teams/Team/aneesh.webp'
import Mridul from '../../assets/devs/mridul.jpeg';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';

const Developers = () => {
  return (
    <div className="Team">
    <header>
      <div className="title">
        {/* <img className="TeamHeading" src={TeamHeading} alt="Team Zero" /> */}
      </div>
      <div className="content">
        <h5>who we are</h5>
        <p>
          We are team of creatively diverse. driven. innovative programmers.
        </p>
      </div>
    </header>
    <main>
      <div className="profile">
        <figure data-value="Full Stack Developer">
          <img src={Priyanshu} alt="" />
          <figcaption>Priyanshu Gupta</figcaption>
          <div className='flex'>
           <a href='https://instagram.com/mr.kitretsu' target='_blank'><AiFillInstagram className='text-3xl'/></a>
           <a href='https://github.com/Priyanshu85' target='_blank'><AiFillGithub className='text-3xl ml-2'/></a>
           </div>
        </figure>
      </div>
      <div className="profile">
        <figure data-value="Full Stack Developer">
          <img src={Aneesh} alt="" />
          <figcaption>Aneesh Kumar</figcaption>
          <div className='flex'>
           <a href='https://www.instagram.com/aneesh1029/' target='_blank'><AiFillInstagram className='text-3xl'/></a>
           <a href='https://github.com/aneesh-dev1' target='_blank'><AiFillGithub className='text-3xl ml-2'/></a>
           </div>
        </figure>
      </div>
      <div className="profile">
        <figure data-value="Frontend Developer">
          <img src={Mridul} alt="" />
          <figcaption>Mridul Tiwari</figcaption>
          <div className='flex'>
           <a href='#_' target='_blank'><AiFillInstagram className='text-3xl'/></a>
           <a href='https://github.com/MridulTi' target='_blank'><AiFillGithub className='text-3xl ml-2'/></a>
           </div>
        </figure>
      </div>
      {/* <div className="profile">
        <figure data-value="Frontend Developer">
          <img src={require("../../assets/Dhruv.jpg")} alt="" />
          <figcaption>Dhruv Varshney</figcaption>
        </figure>
      </div> */}
    </main>
  </div>
  )
}

export default Developers