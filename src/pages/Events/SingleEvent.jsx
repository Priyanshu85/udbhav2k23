import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { carouselData1 } from '../../data/data';

const SingleEvent = () => {

    const [selectedTab, setSelectedTab] = useState(0);
    const { eventSlug } = useParams();

    const event = carouselData1.find(i => i.slug === eventSlug);

    if (!event) {
        return <div className='bg-black min-h-screen grid place-items-center'>
            <h1 className='font-SquadaOne text-center text-white text-5xl'>Event Not Found</h1>
        </div>;
    }

    const { banner, poster, event_name, tagline, venue, date, time, team_size, desc, poc, prize_pool, winner, rules, registrationLink, disable} = event;

    const linkHandler = () => {
        if (!registrationLink) return;
        window.open(registrationLink);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='bg-black pt-10 pb-20'>
            <div className='max-lg:px-5 lg:w-[1000px] mx-auto'>
                <div className='mb-5' onClick={()=>window.history.back()}>
            <a href="#_" className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-yellow-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
<span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
<span className="relative">Go Back</span>
</a>
</div>
                <div className='border-2 border-white rounded-md'>
                    <div className='overflow-hidden'>
                        <img src={poster} alt='' className='w-full h-auto' />
                    </div>
                    <div className='py-5'>
                        <div className='flex max-md:flex-col max-md:gap-y-5 max-md:pb-5 justify-between items-center px-5'>
                            <div className='md:w-8/12'>
                                <div className='flex gap-x-2 items-center'>
                                    <div className='w-24 sm:w-44 md:w-52'>
                                        <img src={banner} alt='' className='w-full h-auto' />
                                    </div>
                                    <div className='flex-1'>
                                        <h1 className='font-SquadaOne text-4xl text-white'>{event_name}</h1>
                                        <p className='mt-3 text-white text-lg'>{tagline}</p>
                                        <span className='flex items-center flex-wrap gap-y-2 text-white gap-x-2 text-xs sm:text-sm'>
                                            <p className='flex items-center gap-x-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                </svg>
                                                {venue}
                                            </p>
                                            <p className='flex items-center gap-x-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {date}
                                            </p>
                                            <p className='flex items-center gap-x-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                                </svg>
                                                {time}
                                            </p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-4/12'>
                                <div className='text-right rel'>
                                <div className='mb-5' onClick={linkHandler}>
            <a href="#_" className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
<span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
<button className="relative" disabled={disable}>{disable ? `Same Day Register` : `Register`}</button>
</a>
</div>
                                    <span className='text-right mt-2 ml-auto flex flex-col w-fit items-center pr-10 text-sm text-white'>
                                        <p>Team Size</p>
                                        <p className='flex w-fit gap-x-2 items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                            </svg>
                                            {team_size}
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-2 border-white rounded-md mt-5'>
                    <div className='flex justify-start items-center px-8 gap-x-5'>
                        <button onClick={() => setSelectedTab(0)} className={`${selectedTab === 0 ? '!border-[#D57E0A] bg-[#D57E0A] bg-opacity-30' : ''} border-b-2 border-transparent text-lg text-white px-5 py-3 font-medium `}>Description</button>
                        <button onClick={() => setSelectedTab(1)} className={`${selectedTab === 1 ? '!border-[#D57E0A] bg-[#D57E0A] bg-opacity-30' : ''} border-b-2 border-transparent text-lg text-white px-5 py-3 font-medium `}>Rules</button>
                    </div>
                    <div className='w-full'>
                        <div className={`px-3 md:px-8 my-5 md:my-10 ${selectedTab === 0 ? 'block' : 'hidden'}`}>
                            <div className='mb-10'>
                                <h1 className='text-4xl text-white font-SquadaOne'>About The Event</h1>
                                <p className='text-lg mt-5 text-white'>
                                    {desc}
                                </p>
                            </div>
                            <div className='mb-10'>
                                <h1 className='text-4xl text-white font-SquadaOne'>Event Pocs</h1>
                                {Object.keys(poc).map((item, index) =>
                                    <p className='text-lg mt-5 text-white' key={index}>
                                        <div className='flex items-center bg-[#D57E0A] rounded-md bg-opacity-25'>
                                            <span className='block w-fit px-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>
                                            </span>
                                            <p className='px-4 py-2 text-lg font-medium bg-[#D57E0A] rounded-md flex-1 flex items-center'>
                                                <span>{item} :</span>
                                                <span className='font-semibold ml-2'>{poc[item]}</span>
                                            </p>
                                        </div>
                                    </p>
                                )}
                            </div>
                            <div className='bg-[#D57E0A] bg-opacity-20 rounded-md pb-4'>
                                <p className='flex items-center py-4 px-3 text-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                                    </svg>
                                    <span className='px-3 block text-lg font-medium'>
                                        Prize Pool : ₹ {prize_pool}
                                    </span>
                                </p>
                                <div className='pl-12'>
                                    {winner?.map((item, index) =>
                                        <p key={index} className='text-base py-2 px-3 mb-2 rounded-md bg-[#D57E0A] text-white font-medium flex gap-x-2'>
                                            <span>{item.name} :</span>
                                            <span className='font-normal'>{item.id}</span>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={`px-3 md:px-8 my-5 md:my-10 ${selectedTab === 1 ? 'block' : 'hidden'}`}>
                            <h1 className='text-4xl text-white font-SquadaOne mb-5'>Rules and Regulations</h1>
                            <div className='flex flex-col gap-y-2'>
                                {rules.map((rule, index) =>
                                    <div key={index} className='bg-[#D57E0A] bg-opacity-20 rounded-md py-2 flex items-center'>
                                        <span className='block w-fit px-1 sm:px-3 text-white'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </span>
                                        <p className='text-white text-sm md:text-base rounded-md  bg-[#D57E0A] font-medium py-1 px-3 text-left'>{rule}</p>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default SingleEvent;
