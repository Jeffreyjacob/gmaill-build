import React, { useEffect } from 'react';
import './App.css';
import Header from './container/Header';
import Sidebar from './container/Sidebar';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes

} from "react-router-dom";
import Mail from './container/Mail';
import EmailList from './container/EmailList';
import SendMail from './container/SendMail';
import { useDispatch, useSelector } from 'react-redux'
import { selectsendMessageIsOpen } from './features/mailSlice';
import { LoginAction, LogoutAction, selectUser } from './features/userSlice';
import Login from './container/Login';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(LoginAction({
          displayName: userAuth.displayName,
          email:userAuth.email,
          photoUrl:userAuth.photoURL
        }))
      }
    })
  })
  return (
    <BrowserRouter>
      {
        !user ? (
          <Login />
        ) : (
          <div className="App">
            <Header />
            <div className='app_body'>
              <Sidebar />
              <Routes>
                <Route path='/mail' element={<Mail />} />
                <Route path='/' element={<EmailList />} />
              </Routes>
            </div>
            {sendMessageIsOpen && <SendMail />}


          </div>
        )
      }


    </BrowserRouter>
  );
}

export default App;
