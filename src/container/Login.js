import React from 'react';
import './login.css';
import { Button } from '@mui/material';
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { LoginAction } from '../features/userSlice';

function Login() {
    const dispatch = useDispatch()
    const signIn = ()=>{
        auth.signInWithPopup(provider).then(({user})=>{
            dispatch(LoginAction({
                displayName: user.displayName,
                email:user.email,
                photoUrl:user.photoURL
            }))
        }).catch(error => alert(error.message))
    }
  return (
    <div className='login'>
        <div className='login__container'>
            <img src='https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-0.png' alt=''/>
            <Button onClick={signIn} variant='contained' color='primary'>Login</Button>
        </div>
    </div>
  )
}

export default Login;