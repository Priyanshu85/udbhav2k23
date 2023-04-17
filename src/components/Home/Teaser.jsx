import React from 'react';

const Teaser = () => {
    return (
        <section className='lg:py-10 w-full'>
            <div className='container mx-auto px-5'>
                <div className='md:w-[700px] 2xl:w-[900px] mx-auto lg:mt-16 p-10'>
                    <div className='relative mx-auto !pt-[56.25%] w-full rounded-lg overflow-hidden bg-white shadow-[0px_0px_20px_1px_white]'>
                        <iframe className='absolute top-0 left-0' width="100%" height="100%" src="https://www.youtube.com/embed/JRYxsi7EVxA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Teaser;
