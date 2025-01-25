import React from 'react'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import AddSong from './pages/AddSong/AddSong.jsx';
import AddAlbum from './pages/AddAlbum/AddAlbum.jsx';
import ListSong from './pages/ListSong/ListSong.jsx';
import ListAlbum from './pages/ListAlbum/ListAlbum.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

export const url = 'http://localhost:4000'

const App = () => {
  return (
    <div className='app-container'>
      <ToastContainer/>
      <SideBar/>
      <div className='main-content'>
        <NavBar/>

        <div className='content-padding'>
          <Routes>
            <Route path='/add-song' element={<AddSong/>}/>
            <Route path='/add-album' element={<AddAlbum/>}/>
            <Route path='/list-song' element={<ListSong/>}/>
            <Route path='/list-album' element={<ListAlbum/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
