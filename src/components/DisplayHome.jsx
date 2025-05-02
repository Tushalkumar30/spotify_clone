import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongsItem from './SongsItem'
import { songsData } from '../assets/assets'
import { assets } from '../assets/assets'

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className='mb-3'>
        <h1 className='my-4 font-bold text-2xl'>Featured Chart</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
        </div>
      </div>

      <div className='mb-15'>
        <h1 className='my-4 font-bold text-2xl'>Today's Biggest Hit</h1>
        <div className='flex overflow-auto'>

        {songsData.map((item, index) => (
          <SongsItem
            key={index}
            name={item.name}
            desc={item.desc}
            id={item.id}
            image={item.image}
          />
    ))}
        </div>
      </div>

      
    </>
  )
}

export default DisplayHome