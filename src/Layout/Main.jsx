import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Footer/Footer';
import NavBar from '../Pages/Home/Home/Navbar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;