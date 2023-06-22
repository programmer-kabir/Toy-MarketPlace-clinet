import React from 'react';
import Banner from '../Pages/Home/Banner/Banner';
import { Outlet } from 'react-router-dom';

const Cat = () => {
    return (
        <div>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Cat;