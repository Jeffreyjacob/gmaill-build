import React from 'react';
import {Checkbox,IconButton} from '@mui/material';
import {StarBorderOutlined,LabelImportantOutlined} from '@mui/icons-material'
import './emailRow.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectedMail } from '../features/mailSlice';


function EmailRow({id,title,subject,description,time}) {
    const history = useNavigate();
    const dispatch = useDispatch();

    const openMail = ()=>{
      dispatch(selectedMail({
        id,
        title,
        subject,
        description,
        time
      }))
      history("/mail")
    }
  return (
    <div  onClick={openMail} className='emailRow'>
        <div className='emailRow__options' >
          <Checkbox/>
          <IconButton>
            <StarBorderOutlined/>
          </IconButton>
          <IconButton>
            <LabelImportantOutlined/>
          </IconButton>
        </div>
        <h3 className='emailRow__title'>
             {title}
        </h3>
        <div className='emailRow__message'>
             <h4>
            {subject}{" - "} 
            <span className='emailRow__description'>
                {description}
                </span> 
             </h4>
        </div>
        <p className='emailRow__time'>
         {time}
        </p>
    </div>
  )
}

export default EmailRow;