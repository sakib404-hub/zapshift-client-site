import React from 'react';
import casio from '../../../assets/brands/casio.png'
import amazon from '../../../assets/brands/amazon.png'
import moonStar from '../../../assets/brands/moonstar.png'
import star from '../../../assets/brands/star.png'
import starPeopple from '../../../assets/brands/start_people.png'
import randstad from '../../../assets/brands/randstad.png'

const Companies = () => {
    return (
        <div className='max-w-6xl mx-auto my-10 p-4'>
            <h3 className='text-center font-semibold text-xl text-secondary my-3'>We Helped thousends of Sales Teams</h3>
            <div className='flex items-center justify-center flex-wrap gap-10'>
                <img src={casio} alt="" />
                <img src={amazon} alt="" />
                <img src={moonStar} alt="" />
                <img src={star} alt="" />
                <img src={starPeopple} alt="" />
                <img src={randstad} alt="" />
            </div>
        </div>
    );
};

export default Companies;