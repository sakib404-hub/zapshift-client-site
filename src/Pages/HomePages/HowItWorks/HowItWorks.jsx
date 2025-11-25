import React from 'react';
import carImg from '../../../assets/bookingIcon.png'

const HowItWorks = () => {
    const howitWorks = [
        {
            id: 1,
            title: "Booking Pick and Drop",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            id: 2,
            title: "Cash On Delivery",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            id: 3,
            title: "Delivery Hub",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            id: 4,
            title: "Booking SME & Corporate",
            description: "From personal packages to business shipments — we deliver on time, every time."
        }
    ]
    return (
        <div className='my-25 max-w-6xl mx-auto p-4'>
            <h1 className='text-2xl font-semibold'>How it Works!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    howitWorks.map((cmp) => {
                        return <div className='p-4 bg-[#f9f9fa] rounded-2xl my-5 space-y-2 shadow-xl'>
                            <img src={carImg} alt="" />
                            <h3 className='text-xl font-semibold'>{cmp.title}</h3>
                            <p>{cmp.description}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default HowItWorks;