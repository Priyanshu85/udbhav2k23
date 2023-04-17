import React from 'react'
import { useNavigate } from 'react-router-dom'
import comming from "../../assets/comming-soon.png"

const Inbuilding = () => {
    const navigate = useNavigate();
  return (
    <section className="text-gray-600 body-font h-[90vh]">
  <div className="container h-full mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={comming}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">This page is comming soon...</h1>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg cursor-pointer" onClick={() => navigate("/")}>Go back</button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Inbuilding