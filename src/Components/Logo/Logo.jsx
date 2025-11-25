import React from 'react';
import logo from '../../assets/logo.png'

const Logo = () => {
    return (
        <div className='flex items-end p-2'>
            <img src={logo} alt="Logo" />
            <h3 className='text-3xl font-bold -ml-4'>ZapShift</h3>
        </div>
    );
};

export default Logo;