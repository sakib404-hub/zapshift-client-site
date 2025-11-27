import React, { use } from 'react';
import Logo from '../Logo/Logo';
import { NavLink, useNavigate } from 'react-router';
import { MdArrowOutward } from "react-icons/md";
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const Header = () => {
    const { user, logOut } = use(AuthContext);
    console.log(user);
    console.log(logOut);
    const navigate = useNavigate();
    const links = <div className='flex flex-col md:flex-row text-base font-bold space-x-5'>
        <NavLink>Services</NavLink>
        <NavLink to={'/coverage'}>Coverage</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Contact</NavLink>
    </div>
    const handlelogin = () => {
        navigate('/login');
    }
    const handlelogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logged Out Successfully!",
                    text: "You have been logged out.",
                    showConfirmButton: false,
                    timer: 2000,
                    toast: true,
                    timerProgressBar: true
                });
            })
            .catch((error) => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Logout Failed!",
                    text: error.message,
                    showConfirmButton: false,
                    timer: 2000,
                    toast: true,
                    timerProgressBar: true
                });
            })
    }
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

                {user && (
                    <div className="flex items-center justify-center mr-2">
                        <img
                            src={user.photoURL}
                            alt="User"
                            className="w-12 h-12 rounded-full border"
                        />
                    </div>
                )}
                {
                    user ? <button
                        onClick={handlelogOut}
                        className="btn btn-primary text-black font-bold md:px-10 rounded-xl">LogOut
                    </button> : <button
                        onClick={handlelogin}
                        className="btn btn-primary text-black font-bold md:px-10 rounded-xl">Login
                    </button>
                }
                {
                    !user && <div className='border p-2 rounded-full bg-[#1f1f1f]'>
                        <MdArrowOutward
                            className='text-2xl text-primary' />
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;