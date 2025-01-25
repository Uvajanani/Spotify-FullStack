import React, { useEffect, useState } from 'react';
import './AddSong.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { url } from '../../App';
import { toast } from 'react-toastify';


const AddSong = () => {

  const [image, setImage] = useState(false)
  const [song, setSong] = useState(false)
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [album, setAlbum] = useState(null)
  const [loading, setLoading] = useState(false)
  const [albumData, setAlbumData] = useState([])

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    setLoading(true)

    try {
      
      const formData = new FormData()
      formData.append('name', name)
      formData.append('desc', desc)
      formData.append('image', image)
      formData.append('audio', song)
      formData.append('album', album)

      const response = await axios.post(`${url}/api/song/add`, formData)
      
      if(response.data.success) {
        toast.success("Song Added")
        setName("")
        setDesc("")
        setAlbum("none")
        setImage(false)
        setSong(false)
      } else {
        toast.error("Something went wrong!")
      }

    } catch (error) {
      console.log(error)
      toast.error("Error occurred")
    }
    setLoading(false)

  }

  const loadAlbumData = async() => {
    try {
      
      const response = await axios.get(`${url}/api/album/list`)
      if(response.data.success) {
        setAlbumData(response.data.albums)
      } else {
        toast.error("Unable to load Albums Data")
      }

    } catch (error) {
      toast.error("Error occurred")
    }
  }

  useEffect(() => {
    loadAlbumData()
  }, [])

  return loading ? (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  ) : 
  (
    <form onSubmit={onSubmitHandler} className="form-container">
      <div className="form-upload-group">
        <div className="upload-item">
          <p>Upload song</p>
          <input onChange={(e) => setSong(e.target.files[0])} type="file" id="song" accept="audio/*" hidden />
          <label htmlFor="song">
            <img src={song ? assets.upload_added : assets.upload_song} className="upload-image" alt="" />
          </label>
        </div>

        <div className="upload-item">
          <p>Upload Image</p>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" accept="image/*" hidden />
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} className="upload-image" alt="" />
          </label>
        </div>
      </div>

      <div className="form-input-group">
        <p>Song Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="input-field"
          placeholder="Type Here"
          type="text"
          required
        />
      </div>

      <div className="form-input-group">
        <p>Song Description</p>
        <input
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          className="input-field"
          placeholder="Type Here"
          type="text"
          required
        />
      </div>

      <div className="form-input-group">
        <p>Album</p>
        <select onChange={(e) => setAlbum(e.target.value)} defaultValue={album} className="select-field">
          {albumData.map((item, index) =>(<option key={index} value={item.name}>{item.name}</option>))}
        </select>
      </div>

      <button type="submit" className="submit-button">
        Add
      </button>
    </form>
  );
};

export default AddSong;
