import React from 'react';
import { useNavigate } from 'react-router-dom';

// assets
import ticketSVG from '../../assets/events/ticketBack.svg';
import { Link } from 'react-router-dom';

const EventsCard = ({ event }) => {
    const navigate = useNavigate();
    const { banner, slug, registrationLink } = event;
    const linkHandler = () => {
        if (!registrationLink) return;
        window.open(registrationLink);
    }
    return (
        <div className='rounded-xl bg-[#ffa50054] bg-opacity-10 p-6'>
            <div className='shadow-[0px_0px_20px_3px_#ffffff61] overflow-hidden rounded-xl transition-[filter] duration-150'>
                <img src={banner} alt='event thumbnail' className='w-full h-auto cursor-pointer' onClick={() => navigate(`/events/${slug}`)} />
            </div>
            <div className="flex mt-7 relative">
                <img src={ticketSVG} />
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-around font-SquadaOne'>
                    <button onClick={linkHandler} className="rounded-md border-2 border-dashed border-green-700 bg-green-600 bg-opacity-10 py-1 px-4 duration-200 hover:bg-opacity-30">Register</button>
                    <Link to={`/events/${slug}`}>
                        <button className="rounded-md border-2 border-dashed border-green-700 bg-green-600 bg-opacity-10 py-1 px-4 duration-200 hover:bg-opacity-30">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default EventsCard;
