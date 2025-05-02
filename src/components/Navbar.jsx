import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {

    const navigate = useNavigate();
    return (
        <>
            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    <img onClick={() => {navigate(-1)}} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
                    <img onClick={() => {navigate(1)}} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
                </div>

                <div className='flex items-center gap-3'>
                    <p className='bg-white text-black z-10 text-[15px] px-3 py-1 rounded-2xl hidden md:block cursor-pointer'>
                        Explore Premium
                    </p>
                    <p className='bg-black text-white px-3 py-1 gap-2 cursor-pointer rounded-2xl border border-white'>Install App</p>
                    <p className='bg-violet-500 text-white w-7 h-7 rounded-full flex items-center justify-center '>T</p>
                </div>
                {/*  */}
            </div>
            <div className='flex items-center gap-2 mt-2 '> 
                    <p className='bg-white text-black px-4 py-1 rounded-2xl font-medium cursor-pointer '>All</p>
                    <p className='text-white px-4 py-1 rounded-2xl border border-gray-700 cursor-pointer '>Music</p>
                    <p className='text-white px-4 py-1 rounded-2xl border border-gray-700 cursor-pointer '>Podcasts</p>
                </div>

        </>
    )
}

export default Navbar