import React,{useEffect, useRef} from 'react'
import DisplayHome from './DisplayHome'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {

  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes('/album');
  const albumId = isAlbum ? location.pathname.slice(-1):"";
  const bgColor = albumsData[Number(albumId)].bgColor;
  
  
  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = '#121212';
    }
  })
  

  return (
    <div ref={displayRef} className='fixed top-0 left-[25%] w-[75%] h-screen px-5 pt-4 overflow-auto bg-[#121212] text-white rounded'>
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display
