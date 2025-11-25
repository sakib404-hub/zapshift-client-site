import React from 'react';
import percelTracking from '../../../assets/live-tracking.png'
import delivary from '../../../assets/safe-delivery.png'

const Tracking = () => {
    const trackings = [
        {
            id: 1,
            img: percelTracking,
            title: `Live Parcel Tracking`,
            description: `Stay updated in real - time with our live parcel tracking feature.From pick - up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.`
        },
        {
            id: 2,
            img: delivary,
            title: `100% Safe Delivery`,
            description: `We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.`
        },
        {
            id: 3,
            img: delivary,
            title: `24/7 Call Center Support`,
            description: `Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.`
        }
    ]
    return (
        <div className="max-w-7xl mx-auto my-10 px-4">
            <div className="space-y-6">
                {trackings.map((tracking, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center gap-6 bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                    >
                        {/* Image */}
                        <div className="w-40 h-32 overflow-hidden rounded-xl">
                            <img
                                src={tracking.img}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Text Info */}
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-xl font-semibold text-gray-800">
                                {tracking.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {tracking.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tracking;