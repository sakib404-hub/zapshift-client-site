import React from 'react';
import authImg from '../../assets/authImage.png'
import { Outlet } from 'react-router';
import Logo from '../../Components/Logo/Logo';
import Footer from '../../Components/Footer/Footer';

const AuthLayout = () => {
    return (
        <div>
            <div className='ml-6 p-2'>
                <Logo></Logo>
            </div>
            <div className='my-10 md:my-0 flex flex-col-reverse md:flex-row '>
                <div className='h-auto border flex bg-[#ffffff] items-center justify-center md:min-h-screen w-full md:w-1/2 p-5'>
                    <Outlet></Outlet>
                </div>
                <div className="flex items-center justify-center bg-[#fafdf0] h-auto md:min-h-screen w-full md:w-1/2 p-5">
                    <img src={authImg} alt="" />
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AuthLayout;