import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination, Autoplay } from 'swiper';
import CarouselItem from './CarouselItem';
import { carouselData1 } from '../../data/data';

const HeroCarousel = () => {

    return (
        <div>
            <Swiper
                speed={1000}
                effect='fade'
                modules={[EffectFade, Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {carouselData1.map((item, index) => <SwiperSlide key={index}><CarouselItem data={item} /></SwiperSlide>)}
            </Swiper>
        </div>
    );
}

export default HeroCarousel;
