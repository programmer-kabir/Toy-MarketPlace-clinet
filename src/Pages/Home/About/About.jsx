import { Button } from 'flowbite-react';
import React from 'react';
import Swal from 'sweetalert2';

const About = () => {
    const handleViewDetails = () =>{
        Swal.fire("Yah!", "Your Button worked Successfully!", "success");
    }
    return (
        <div>
            <div className='text-center md:w-1/2 mx-auto space-x-5 '>
            <h2 className='text-4xl font-bold my-5'>About Us</h2>
            <p className='mb-2 text-stone-400'>Most die castings are made from non-ferrous metals, specifically zinc, copper, aluminium, magnesium, lead, pewter, and tin-based alloys. Depending on the type of metal being cast, a hot- or cold-chamber machine is used.</p>
            </div>
        <div className='md:flex items-center border-2 px-5'>
            <div className='md:w-1/2'>
            <img src={"https://s.alicdn.com/@sc04/kf/He4db414b9acf4e1898a545425f08ead0R.jpg_720x720q50.jpg"} alt="" />
            </div>
            <div className='md:w-1/2 px-5 text-center'>
                <h3 className='text-2xl font-bold text-center'>Diecast Cars Alloy Retro Car Model</h3>
                <p className='text-start my-2 text-slate-500'>Die casting is a metal casting process that involves feeding molten nonferrous alloys into dies under high pressure and at high speed to rapidly create molded products. The main materials used in die casting are alloys of aluminum, magnesium and zinc.</p>
                <Button className='mx-auto my-2' onClick={handleViewDetails}>View Details</Button>
            </div>
        </div></div>
    );
};

export default About;