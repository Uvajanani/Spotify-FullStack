import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './AddAlbum.css'
import { url } from '../../App';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddAlbum = () => {

  const [image, setImage] = useState(false)
  const [colour, setColour] = useState("#ffffff")
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmitHandler = async(e) => {
    e.preventDefault()
    setLoading(true)

    try {
      
      const formData = new FormData()
      formData.append('name', name)
      formData.append('desc', desc)
      formData.append('image', image)
      formData.append('bgColour', colour)

      const response = await axios.post(`${url}/api/album/add`, formData)
      if(response.data.success) {
        toast.success("Album Added")
        setName("")
        setDesc("")
        setImage(false)
      } else {
        toast.error("Something went wrong")
      }

    } catch (error) {
      console.log(error)
      toast.error("Error occurred")      
    }
    setLoading(false)
    
  }


  return loading ? (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
    ) : (
    <form onSubmit={onSubmitHandler} className="add-album-form">
      <p>Upload Image</p>
      <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" accept="image/*" hidden />
      <label htmlFor="image" className="upload-label">
        <img src={ image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
      </label>

      <div className="input-group">
        <p>Album Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Type Here" />
      </div>

      <div className="input-group">
        <p>Album Description</p>
        <input onChange={(e) => setDesc(e.target.value)} value={desc} type="text" placeholder="Type Here" />
      </div>

      <div className="color-picker-group">
        <p>Background Colour</p>
        <input onChange={(e) => setColour(e.target.value)} value={colour} type="color" />
      </div>

      <button className="submit-button" type="submit">ADD</button>
    </form>
  );
};

export default AddAlbum;

