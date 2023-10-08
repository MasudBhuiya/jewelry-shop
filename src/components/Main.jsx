import React from 'react';
import Navbar from './Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Shared/Footer';

const Main = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;