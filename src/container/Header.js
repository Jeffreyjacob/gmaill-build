import React from 'react';
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
       <div className='header__left'>
        <IconButton>
        <MenuIcon/>
        </IconButton>
        <img src='https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-0.png'/>
       </div>

       <div className='header__middle'>
       <SearchIcon/>
       <input type='text' placeholder='Search'/>
       <ArrowDropDownIcon/>
       </div>

       <div className='header__right'>
             <IconButton>
                 <AppsIcon/>
             </IconButton>
             <IconButton>
             <NotificationsIcon/>
             </IconButton>
             <Avatar/>
       </div>
    </div>
  )
}

export default Header