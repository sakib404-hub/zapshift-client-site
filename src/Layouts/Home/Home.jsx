import React from 'react';
import Banner from '../../Pages/HomePages/Banner/Banner';
import HowItWorks from '../../Pages/HomePages/HowItWorks/HowItWorks';

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
        </div>
    );
};

export default Home;