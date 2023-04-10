import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CarouselItem = ({ data }) => {

    const { poster, event_name, desc, slug } = data;
    const [seeMore, setSeeMore] = useState(false);

    const cutText = (text) => {
        if (text.length <= 150) {
            return text
        } else {
            const sliceText = seeMore ? text : text.slice(0, 150);
            return <>{sliceText} ... <span className='cursor-pointer underline' onClick={() => setSeeMore(!seeMore)}>{seeMore ? 'Less' : 'More'}</span></>;
        }
    }

    return (
        <div className='relative'>
            <div className='relative max-sm:h-[60vw] max-lg:h-[50vw]'>
                <img src={poster} alt='Event Carousel' className='w-full max-lg:h-full max-lg:object-cover h-auto' />
                <span className='block absolute top-0 left-0 w-full h-full bg-[#00000085]'></span>
            </div>
            <div className='absolute max-sm:bottom-6 bottom-16 left-1/2 max-md:-translate-x-1/2 md:left-16 text-white font-SquadaOne max-sm:w-11/12 w-10/12 md:w-[500px]'>
                <h1 className="mb-1 text-2xl tracking-wide sm:text-4xl md:text-5xl">{event_name}</h1>
                <p className='text-sm font-light tracking-wide sm:text-base'>{cutText(desc)}</p>
                <button className='text-black mt-3 w-fit rounded-md bg-white px-8 py-1  max-md:text-sm tracking-wide text-prussian-blue-1000 shadow-soft transition-[filter,transform] hover:scale-[1.01] hover:cursor-pointer hover:drop-shadow-low disabled:pointer-events-none disabled:cursor-default disabled:opacity-50 md:text-xl'>
                    <Link to={`/events/${slug}`}>Register Now</Link>
                </button>
            </div>
        </div>
    );
}

export default CarouselItem;
