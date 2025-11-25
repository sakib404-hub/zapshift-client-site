import React, { useState } from 'react';
import serviceImg from '../../../assets/service.png'

const OurServices = () => {
    const [id, setId] = useState(null);
    const services = [
        {
            id: 1,
            title: 'Express & Standard Delivery',
            description: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.'
        },
        {
            id: 2,
            title: 'Nationwide Delivery',
            description: 'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.'
        },
        {
            id: 3,
            title: 'Fulfillment Solution',
            description: 'We also offer customized service with inventory management support, online order processing, packaging, and after sales support.'
        },
        {
            id: 4,
            title: 'Cash on Home Delivery',
            description: '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.'
        },
        {
            id: 5,
            title: 'Corporate Service / Contract In Logistics',
            description: 'Customized corporate services which includes warehouse and inventory management support.'
        },
        {
            id: 6,
            title: 'Parcel Return',
            description: 'Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.'
        }
    ];

    return (
        <div className="my-24 border max-w-7xl mx-auto p-4 md:py-10
        flex flex-col items-center justify-center bg-secondary rounded-2xl">
            <div className="text-white">
                <h3 className="text-3xl font-semibold text-center">Our Services</h3>
                <p className="text-center max-w-3xl">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                    From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 md:px-20 ">
                {services.map((service) => (
                    <div
                        key={service.id}
                        onClick={() => setId(service.id)}
                        className={`border cursor-pointer bg-white flex flex-col items-center justify-center rounded-2xl space-y-3 p-6 shadow-sm ${id === service.id ? 'bg-primary' : ''}`}>
                        <div className="p-4 rounded-full bg-[#f2f1fd]">
                            <img src={serviceImg} alt={service.title} className="w-12 h-12 object-contain" />
                        </div>
                        <h3 className="text-center text-xl font-semibold">{service.title}</h3>
                        <p className="text-center text-gray-600">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;