import React from 'react'
import { useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'
const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className='w-[25%] left-0 top-0 hidden h-screen p-5 flex-col gap-2 text-white bg-black lg:flex'>
      <div className ='bg-[#121212] h-25 rounded flex flex-col justify-around'>
        <div className='flex items-center gap-4 pl-8 cursor-pointer'>
          <img onClick={() => navigate('/')} className='w-6' src= {assets.home_icon} alt="" />
          <p onClick={() => navigate('/')} className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-5 pl-8 cursor-pointer'>
          <img className='w-6' src= {assets.search_icon} alt="" />
          <p className='font-bold'>Search</p>
        </div>

      </div>
      <div className='bg-[#121212] h-full rounded '>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src= {assets.stack_icon} alt="" />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.arrow_icon} alt="" />
            <img className='w-5' src={assets.plus_icon} alt="" />
          </div>

        </div>
        <div className='p4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-2 pl-4'>
          <h1 className='mt-1'>Create your first playlist</h1>
          <p className='font-extralight'>it's easy we'll guide you</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-1 mb-4 '>Create Playlist</button>
        </div>

        <div className='p4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-2 pl-4 mt-4'>
          <h1 className='mt-1'>Let's find some podcasts</h1>
          <p className='font-extralight'>we'll notify you on new episodes</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-1 mb-4 '>Browse podcasts</button>
        </div>
      </div>

    </div>
  )
}

export default Sidebar