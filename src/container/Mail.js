import React from 'react';
import './mail.css';
import { IconButton} from '@mui/material';
import {ArrowBack,MoveToInbox,Error,Delete,Email,WatchLater,
        CheckCircle,LabelImportant,MoreVert,UnfoldMore,Print,
        ExitToApp} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSelectedMail } from '../features/mailSlice';

function Mail() {
   const navigate = useNavigate()
   const selctmail = useSelector(selectSelectedMail)
  return (
    <div className='mail'>
      <div className='mail__tools'>
        <div className='mail__toolsLeft'>
          <IconButton onClick={()=>navigate('/')}>
             <ArrowBack/>
          </IconButton>
          <IconButton>
            <MoveToInbox/>
          </IconButton>
          <IconButton>
            <Error/>
          </IconButton>
          <IconButton>
            <Delete/>
          </IconButton>
          <IconButton>
            <Email/>
          </IconButton>
          <IconButton>
            <WatchLater/>
          </IconButton>
          <IconButton>
           <CheckCircle/>
          </IconButton>
          <IconButton>
            <LabelImportant/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
        <div className='mail__toolsRight'>
          <IconButton>
            <UnfoldMore/>
          </IconButton>

          <IconButton>
            <Print/>
            </IconButton>

            <IconButton>
            <ExitToApp/>
            </IconButton>
        </div>

      </div>
     <div className='mail__body'>
        <div className='mail__bobyHeader'>
            <h3>{selctmail?.subject}</h3>
            <LabelImportant className='mail__important'/>
            <p>{selctmail?.title}</p>
            <p className='mail__time'>{selctmail?.time}</p>
        </div>
        <div className='mail__message'>
          <p>{selctmail?.description}</p>
        </div>
     </div>
    </div>
  )
}

export default Mail;