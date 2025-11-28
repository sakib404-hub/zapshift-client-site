import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutUs = () => {
    const [activeTab, setActiveTab] = useState("Story");

    const tabs = ["Story", "Mission", "Success", "Team & Others"];

    // 🔥 Dynamic content
    const content = {
        Story: [
            "ZapShift began with a simple promise — to make parcel delivery fast, transparent, and stress-free. In the early days, we started with only a small team, delivering just 10–15 parcels a day.",
            "Over time, real-time tracking, improved logistics, and our customer-first approach helped us gain trust across Bangladesh.",
            "Today, thousands use ZapShift daily knowing their packages will arrive safely — on time, every time."
        ],

        Mission: [
            "Our mission is to make delivery as easy as sending a text message — quick, effortless, and trustworthy.",
            "We aim to eliminate delivery anxiety through real-time notifications, doorstep pickup, and end-to-end tracking.",
            "We are committed to empowering small businesses with fast, dependable logistics."
        ],

        Success: [
            "More than 120,000+ parcels delivered successfully.",
            "Trusted by 8,500+ small businesses for daily deliveries.",
            "Achieved 98.7% on-time delivery rate in 2025.",
            "Expanded to 25+ districts with active pickup hubs."
        ],

        "Team & Others": [
            "Our team is made of passionate logistics specialists, riders, developers, and customer-care members.",
            "We believe in culture, innovation, and solving real-world problems.",
            "Every delivery you see on the map is powered by real people working behind the scenes."
        ],
    };

    // 🔥 Animation Variants
    const fadeSlide = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
        exit: { opacity: 0, y: -15, transition: { duration: 0.25 } }
    };

    return (
        <div className="min-h-screen bg-base-200 flex justify-center px-4 py-10">
            <div className="bg-white w-full max-w-6xl rounded-3xl shadow-sm p-10">
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-gray-800"
                >
                    About Us
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-3 text-gray-500 max-w-2xl"
                >
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                    From personal packages to business shipments — we deliver on time, every time.
                </motion.p>
                <hr className="my-8 font-semibold text-gray-300" />
                {/* Tabs */}
                <div className="flex gap-8 text-lg">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-2 transition-all ${activeTab === tab
                                ? "text-green-600 font-semibold border-b-2 p-2 border-green-600"
                                : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Animated Dynamic Content */}
                <div className="mt-8 text-gray-600 leading-relaxed text-[17px] min-h-[260px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            variants={fadeSlide}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="space-y-6"
                        >
                            {content[activeTab].map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
