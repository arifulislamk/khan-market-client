import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Home from '../pages/Home';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Footer />
        </div>
    );
};

export default Main;