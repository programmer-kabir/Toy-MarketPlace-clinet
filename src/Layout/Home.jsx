import React, { useEffect } from 'react';
import Banner from '../Pages/Home/Banner/Banner';
import SportsCar from '../Pages/Home/SportsCar.jsx/SportsCar';
import ReactTabs from '../Pages/Home/ReactTabs/ReactTabs';
import Gallery from '../Pages/Home/Gallery/Gallery';
import About from '../Pages/Home/About/About';
import Offer from '../Pages/Home/Offer/Offer';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ReactTabs></ReactTabs>
            <About></About>
            <div data-aos="fade-right" >
            <Offer></Offer></div>
        </div>
    );
};

export default Home;