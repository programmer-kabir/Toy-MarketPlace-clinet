import React, { useEffect, useState } from 'react';
import SportsCarDetails from './SportsCarDetails';

const SportsCar = () => {
    const [cars, setCar] = useState([])
    useEffect(()=>{
        fetch('/toy.json')
        .then(res => res.json())
        .then(data => setCar(data))
    },[])
    return (
        <div className='grid md:grid-cols-3'>
            {
                cars.map(car => <SportsCarDetails car={car} key={car.id}></SportsCarDetails>)
            }
        </div>
    );
};

export default SportsCar;