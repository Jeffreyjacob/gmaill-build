import React from 'react';
import './Sidebar.css';
import { Button,IconButton } from '@mui/material';
import {Add,Inbox,Star,AccessTime,LabelImportant,NearMe,
        Note,ExpandMore,Person,Duo,Phone} from "@mui/icons-material";
import SidebarOption from '../components/sidebarOption';
import {useDispatch} from 'react-redux'
import { openSendMessage } from '../features/mailSlice';

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className='sidebar'>
      <Button onClick={()=>dispatch(openSendMessage())} startIcon={<Add fontSize='large'/>} className='sidebar__compose'>
        Compose
       </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true}/>
      <SidebarOption Icon={Star} title='Starred' number={54}/>
      <SidebarOption Icon={AccessTime} title='Snoozed' number={54}/>
      <SidebarOption Icon={LabelImportant} title="Important" number={54}/>
      <SidebarOption Icon={NearMe} title='Sent' number={54}/>
      <SidebarOption Icon={Note} title='Drafts' number={54}/>
      <SidebarOption Icon={ExpandMore} title='More' number={54}/>

      <div className='sidebar__footer'>
        <IconButton>
         <Person/>
        </IconButton>
        <IconButton>
          <Duo/>
        </IconButton>
        <IconButton>
          <Phone/>
        </IconButton>
      </div>
    </div>
  )
}

export default Sidebar