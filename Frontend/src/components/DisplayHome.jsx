import React from 'react'
import NavBar from './NavBar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItems from './AlbumItems'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
      <NavBar/>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((item, index) => (<AlbumItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
      </div>

      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
        <div className='flex overflow-auto'>
          {songsData.map((item, index) => (<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
