import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);
    // console.log(reviews);
    return (
        <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides
            loop={true}
            slidesPerView={3}
            coverflowEffect={{
                rotate: 50,
                stretch: '50%',
                depth: 200,
                scale: .75,
                modifier: 1,
                slideShadows: true
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            pagination
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper my-10 mx-auto"
        >
            {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                    <div className="bg-white p-6 rounded-xl shadow-sm max-w-md">
                        <div className="text-teal-300 text-4xl font-bold">❝</div>
                        <p className="text-gray-700 mt-3 leading-relaxed">
                            {review.review}
                        </p>
                        <div className="border-t border-dashed border-gray-300 my-4"></div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-teal-700">
                                <img
                                    src={review.user_photoURL}
                                    alt=""
                                    className='w-full h-full rounded-full' />
                            </div>
                            <div>
                                <h3 className="font-bold text-secondary">{review.userName}</h3>
                                <p className="text-gray-500 text-sm">{review.ratings} ⭐</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

    );
};

export default Reviews;