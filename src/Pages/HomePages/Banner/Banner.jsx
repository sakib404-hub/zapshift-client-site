import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router";
import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'

const Banner = () => {
    const slides = [
        {
            id: 1,
            img: bannerImg1,
            title: "Sparkling Home Cleaning",
            desc: "Keep your home spotless with our professional cleaning services.",
        },
        {
            id: 2,
            img: bannerImg2,
            title: "Expert Plumbing Solutions",
            desc: "Fix leaks, unclog drains, and ensure smooth water flow at home.",
        },
        {
            id: 3,
            img: bannerImg3,
            title: "Reliable Electrical Repairs",
            desc: "From wiring to appliance issues, our electricians have you covered.",
        }
    ];

    const path = useNavigate();
    const handleExploreButton = () => {
        path('/services');
    }

    return (
        <div className="w-fullmx-auto">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loopFillGroupWithBlank={true}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper  overflow-hidden"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="relative w-full h-[15vh] md:h[50vh] lg:h-[80vh] flex items-center justify-center text-center text-white"
                            style={{
                                backgroundImage: `url(${slide.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute bottom-2 left-2 md:bottom-10 md:left-10 z-10 px-6 md:px-10">
                                <div className="">
                                    <button
                                        onClick={handleExploreButton}
                                        className="btn btn-primary text-black
                                        text-base font-semiboldold">Tract your Percel</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
export default Banner;