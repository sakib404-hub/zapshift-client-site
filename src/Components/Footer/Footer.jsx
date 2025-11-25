import React from 'react';
import Logo from '../Logo/Logo';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#0B0B0B] text-primary-content p-10">
            <div className='flex flex-col'>
                <Logo></Logo>
                <p className="font-bold max-w-2xl">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>
            <div className='flex space-x-7'>
                <a href="#">Services</a>
                <a href="#">Coverage</a>
                <a href="#">About Us</a>
                <a href="#">Pricing</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>
            <div className="flex text-3xl space-x-5">
                <IoLogoLinkedin className="text-blue-600 hover:scale-120 transition-all duration-300" />
                <FaGithub className="text-gray-100 hover:scale-120 transition-all duration-300" />
                <FaTwitter className="text-sky-500 hover:scale-120 transition-all duration-300" />
                <FaFacebook className="text-blue-700 hover:scale-120 transition-all duration-300" />
                <FaYoutube className="text-red-600 hover:scale-120 transition-all duration-300" />
            </div>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </footer>
    );
};

export default Footer;