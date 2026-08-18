import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Home from '../pages/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;