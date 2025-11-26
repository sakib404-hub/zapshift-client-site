import React from 'react';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router';
import { MdArrowOutward } from "react-icons/md";

const Header = () => {
    const links = <div className='flex flex-col md:flex-row text-base font-bold space-x-5'>
        <NavLink>Services</NavLink>
        <NavLink to={'/coverage'}>Coverage</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Contact</NavLink>
    </div>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-100 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <Logo></Logo>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-primary text-black font-bold md:px-10 rounded-xl">Login</button>
                <div className='border p-2 rounded-full bg-[#1f1f1f]'>
                    <MdArrowOutward
                        className='text-2xl text-primary' />
                </div>
            </div>
        </div>
    );
};

export default Header;