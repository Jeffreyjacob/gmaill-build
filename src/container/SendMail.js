import React from 'react';
import './sendMail.css';
import {IconButton,Button} from "@mui/material";
import {Close} from "@mui/icons-material";
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux' 
import { closeSendMessage } from '../features/mailSlice';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';

function SendMail() {
    const {register,handleSubmit,watch,errors} = useForm();
     const onSubmit = (formdata)=>{
      db.collection('email').add({
        to:formdata.To,
        subject:formdata.Subject,
        message:formdata.Message,
        timeStamp:firebase.firestore.FieldValue.serverTimestamp()
      })
      dispatch(closeSendMessage());
    
     }
     const dispatch = useDispatch();
  return (
    <div className='sendMail'>
        <div className='sendMail__header'>
          <h3>New Message</h3>
          <IconButton className='sendMail__close' onClick={()=>dispatch(closeSendMessage())}>
            <Close/>
          </IconButton>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='To' placeholder='To' type='email' {...register("To",{required: true})}/>
            <input name='Subject' placeholder='Subject' type='text' {...register("Subject",{required: true})}/>
            <input name='Message' placeholder='Message...' type='text' className='sendMail__message' {...register("Message",{required: true})}/>

            <div className='sendMail__options'>
            <Button
             className='sendMail__button'
             variant='contained'
             color='primary'
             type='submit'
             >
                Send
                </Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail;