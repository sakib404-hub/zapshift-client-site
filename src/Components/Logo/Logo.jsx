import React from 'react';
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router';

const Logo = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/');
    }
    return (
        <div
            onClick={handleLogoClick}
            className='flex items-end p-2'>
            <img src={logo} alt="Logo" />
            <h3 className='text-3xl font-bold -ml-4 cursor-pointer'>ZapShift</h3>
        </div>
    );
};

export default Logo;