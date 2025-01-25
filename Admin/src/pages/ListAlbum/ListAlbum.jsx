import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { url } from '../../App'
import './ListAlbum.css'

const ListAlbum = () => {

  const [data, setData] = useState([])

  const fetchAlbums = async() => {
    try {
      const response = await axios.get(`${url}/api/album/list`)
      if(response.data.success) {
        setData(response.data.albums)
      }

    } catch (error) {
      console.log(error)
      toast.error("Error occurred")
    }
  }

  const removeAlbum = async(id) => {
      try {
        
        const response = await axios.post(`${url}/api/album/remove`, {id})
        if(response.data.success) {
          toast.success(response.data.message)
          await fetchAlbums()
        }

      } catch (error) {
        toast.error("Error occurred")
      }
  }

  useEffect(() => {
    fetchAlbums()
  }, [])

  return (
    <div>
      <p>All Albums List</p>
      <br />

      <div>
        <div className="album-list-container">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Album Colour</b>
          <b>Action</b>
        </div>

        {data.map((item, index) => {
          return (
            <div key={index} className="album-list-item">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.desc}</p>
              <input type="color" value={item.bgColour} />
              <p onClick={() => removeAlbum(item._id)} className="remove">x</p>
            </div>
      )})}

      </div>
    </div>
  )
}

export default ListAlbum
