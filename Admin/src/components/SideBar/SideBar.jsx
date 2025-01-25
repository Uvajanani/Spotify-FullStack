import React from 'react';
import { assets } from '../../assets/assets';
import './sidebar.css'; 
import { NavLink } from 'react-router';

const SideBar = () => {
  return (
    <div className='sidebar-container'>
      <img src={assets.logo} className='logo-large' alt='Large logo'/>
      <img src={assets.logo_small} className='logo-small' alt='Small logo'/>
      
      <div className='sidebar-menu'>
        
        <NavLink to='/add-song' className='sidebar-item'>
          <img src={assets.add_song} className='w-5' alt='' />
          <p className='sidebar-item-text'>Add Song</p>
        </NavLink>

        <NavLink to='/list-song' className='sidebar-item'>
          <img src={assets.song_icon} className='w-5' alt='' />
          <p className='sidebar-item-text'>List Song</p>
        </NavLink>

        <NavLink to='/add-album' className='sidebar-item'>
          <img src={assets.add_album} className='w-5' alt='' />
          <p className='sidebar-item-text'>Add Album</p>
        </NavLink>

        <NavLink to='/list-album' className='sidebar-item'>
          <img src={assets.album_icon} className='w-5' alt='' />
          <p className='sidebar-item-text'>List Album</p>
        </NavLink>
      
      </div>
    </div>
  );
};

export default SideBar;
