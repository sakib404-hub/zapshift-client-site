import React from 'react';
import Banner from '../../Pages/HomePages/Banner/Banner';
import HowItWorks from '../../Pages/HomePages/HowItWorks/HowItWorks';
import OurServices from '../../Pages/HomePages/OurServices/OurServices';
import Companies from '../../Pages/HomePages/Companies/Companies';
import Tracking from '../../Pages/HomePages/Tracking/Tracking';
import Reviews from '../../Pages/HomePages/Reviews/Reviews';

const reviewsPromise = fetch('/reviews.json')
    .then((res) => res.json())

const Home = () => {
    return (
        <div>
            {/* hero section  */}
            <section>
                <Banner></Banner>
            </section>
            {/* how it works section  */}
            <section>
                <HowItWorks></HowItWorks>
            </section>
            <section>
                <OurServices></OurServices>
            </section>
            {/* companies we worked with*/}
            <section>
                <Companies></Companies>
            </section>
            {/* tracking  */}
            <section>
                <Tracking></Tracking>
            </section>
            <section className='max-w-7xl mx-auto my-10 '>
                <h2 className='text-3xl font-bold text-center
                text-secondary
                '>What our customers are sayings</h2>
                <p className='text-center mx-auto max-w-xl'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
                <div className='flex items-center justify-center'>
                    <Reviews reviewsPromise={reviewsPromise}></Reviews>
                </div>
            </section>
        </div>
    );
};

export default Home;