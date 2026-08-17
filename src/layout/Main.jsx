import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Main = () => {
    return (
        <div>
            <Navbar />
            <h1 className=' font-black text-7xl underline bg-amber-300'>tailwind</h1>
            <Footer />
        </div>
    );
};

export default Main;