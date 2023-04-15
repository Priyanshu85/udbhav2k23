import React from 'react';

const Teaser = () => {
    return (
        <section className='lg:py-20 w-full'>
            <div className='container mx-auto px-5'>
                <h1 className='text-center max-sm:text-5xl text-7xl font-semibold underline text-[#D57E0A]'>Teaser</h1>
                <div className='md:w-[700px] 2xl:w-[900px] mx-auto lg:mt-16 p-10'>
                    <div className='relative mx-auto !pt-[56.25%] w-full rounded-lg overflow-hidden bg-white shadow-[0px_0px_35px_5px_white]'>
                        <iframe className='absolute top-0 left-0' width="100%" height="100%" src="https://www.youtube.com/embed/JRYxsi7EVxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Teaser;
