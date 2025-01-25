import React, { useEffect, useState } from 'react'
import { url } from '../../App'
import { toast } from 'react-toastify'
import './ListSong.css'
import axios from 'axios'

const ListSong = () => {

  const [data, setData] = useState([])

  const fetchSongs = async() => {

    try {
      const response = await axios.get(`${url}/api/song/list`)
      
      if(response.data.success) {
        setData(response.data.songs)
      }

    } catch (error) {
      console.log(error)
      toast.error("Error occured")
    }

  }

  const removeSong = async(id) => {
    try {
      
      const response = await axios.post(`${url}/api/song/remove`, {id})

      if(response.data.success) {
        toast.success(response.data.message)
        await fetchSongs()
      }

    } catch (error) {
      toast.error("Error occurred")
    }
  }

  useEffect(() => {
    fetchSongs()
  }, [])

  return (
    <div className="songs-list">
      <p className="songs-title">All Songs List</p>
      <br />
      <div>
        <div className="songs-header">
          <b>Image</b>
          <b>Name</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
        </div>

        {data.map((item, index) => {
          return (
            <div key={index} className="song-item">
              <img className="song-image" src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.album}</p>
              <p>{item.duration}</p>
              <p className='remove' onClick={() => removeSong(item._id)}>x</p>
            </div>
          );
        })}
      </div>
    </div>

  )
}

export default ListSong
