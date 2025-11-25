import React from 'react';
import 'swiper/css';
import casio from '../../../assets/brands/casio.png'
import amazon from '../../../assets/brands/amazon.png'
import moonStar from '../../../assets/brands/moonstar.png'
import star from '../../../assets/brands/star.png'
import starPeopple from '../../../assets/brands/start_people.png'
import randstad from '../../../assets/brands/randstad.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const Companies = () => {
    return (
        <div className='max-w-6xl mx-auto my-10 p-4'>
            <h3 className='text-center font-semibold text-xl text-secondary my-5'>We Helped thousends of Sales Teams</h3>
            {/* <div className='flex items-center justify-center flex-wrap gap-10'>
                <img src={casio} alt="" />
                <img src={amazon} alt="" />
                <img src={moonStar} alt="" />
                <img src={star} alt="" />
                <img src={starPeopple} alt="" />
                <img src={randstad} alt="" />
            </div> */}
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                grabCursor={true}
                spaceBetween={10}
                loop={true}
                modules={[Autoplay]}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
            >
                <SwiperSlide>
                    <img src={casio} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={amazon} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={moonStar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={star} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={starPeopple} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={randstad} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={star} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={starPeopple} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={randstad} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Companies;