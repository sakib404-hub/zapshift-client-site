import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Layout = () => {
    return (
        <div className='bg-[#eaeced]'>
            <header>
                <Header></Header>
            </header>
            <main className='border'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;