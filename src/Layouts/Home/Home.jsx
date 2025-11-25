import React from 'react';
import Banner from '../../Pages/HomePages/Banner/Banner';
import HowItWorks from '../../Pages/HomePages/HowItWorks/HowItWorks';
import OurServices from '../../Pages/HomePages/OurServices/OurServices';
import Companies from '../../Pages/HomePages/Companies/Companies';
import Tracking from '../../Pages/HomePages/Tracking/Tracking';

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
        </div>
    );
};

export default Home;