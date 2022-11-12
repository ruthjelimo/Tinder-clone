import React from 'react';
import  './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import  IconButton  from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className="Header">
        
        <IconButton>
        <PersonIcon fontSize='large' className='Header-icon'/>

        </IconButton>
      
      <img 
      className='tinder' 
      
      src='https://cdn-icons-png.flaticon.com/512/2111/2111653.png'>

      </img>
      <IconButton>
      <ForumIcon fontSize='large' className='Header-icon'/>

      </IconButton>
     
      


    </div>
  )
}

export default Header