import React, { useState } from 'react'
import HeroCarousel from '../../components/Events/HeroCarousel'
import { carouselData1 } from '../../data/data';

// assets
import bgPattern from '../../assets/events/pattern.webp';
import EventsCard from '../../components/Events/EventsCard';

const Events = () => {

  const [selectedDay, setSelectedDay] = useState(0);

  const eventsData = selectedDay === 0 ? carouselData1.filter(i => i.day === 0) : carouselData1.filter(i => i.day !== 0);

  return (
    <div className='bg-black' style={{ backgroundImage: `url(${bgPattern})`, backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
      <HeroCarousel />
      <div className='py-20 container mx-auto px-5'>

        <div className='flex justify-center items-center gap-x-3'>
          <button className={`text-4xl font-SquadaOne rounded-md py-2 px-4 ${selectedDay === 0 ? 'text-black bg-white' : 'text-white'} hover:scale-105 duration-200`} onClick={() => setSelectedDay(0)}>Day 0</button>
          <button className={`text-4xl font-SquadaOne rounded-md py-2 px-4 ${selectedDay === 1 ? 'text-black bg-white' : 'text-white'} hover:scale-105 duration-200`} onClick={() => setSelectedDay(1)}>Day 1</button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10'>
          {eventsData.map((event, index) => <EventsCard event={event} key={index} />)}
        </div>
        <div className='flex gap-x-2 justify-center mt-14'>
          <button onClick={() => setSelectedDay(0)} disabled={selectedDay === 0} type="button" class="disabled:opacity-80 flex justify-center items-center gap-x-2 rounded bg-[#D57E0A] py-2 px-3 text-white font-SquadaOne">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>
            Prev Day Events
          </button>
          <button onClick={() => setSelectedDay(1)} disabled={selectedDay === 1} type="button" class="disabled:opacity-80 flex justify-center items-center gap-x-2 rounded bg-[#D57E0A] py-2 px-3 text-white font-SquadaOne">
            Next Day Events
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Events