import React, { useEffect, useState } from 'react';
import './emailList.css';
import {IconButton,Checkbox } from '@mui/material';
import {ArrowDropDown,Redo,MoreVert,ChevronLeft,ChevronRight,
       KeyboardHide,Settings,Inbox,People,LocalOffer} from '@mui/icons-material';
import Section from '../components/Section';
import EmailRow from '../components/EmailRow';
import { db } from '../firebase';

function EmailList() {
      const [emails,setEmail] = useState([]);
      useEffect(()=>{
         db.collection('email').orderBy('timeStamp','desc').onSnapshot(
          snapshot => setEmail(
            snapshot.docs.map( docs => ({
              id:docs.id,
              data:docs.data()
            }))
          )
         )
      },[])
  return (
    <div className='emailList'>
       <div className='emailList__setting'>
         <div className='emailList__settingLeft'>
              <Checkbox/>
              <IconButton>
                <ArrowDropDown/>
              </IconButton>
              <IconButton>
                <Redo/>
              </IconButton>
              <IconButton>
                <MoreVert/>
              </IconButton>
         </div>

         <div className='emailList__settingRight'>
             <IconButton>
              <ChevronLeft/>
             </IconButton>
             <IconButton>
              <ChevronRight/>
              </IconButton>
              <IconButton>
              <KeyboardHide/>
              </IconButton>
              <IconButton>
               <Settings/>
              </IconButton>
         </div>
       </div>
       <div className='emailList__section'>
              <Section Icon={Inbox} title="Primary" color="red" />
              <Section Icon={People} title="Social" color="#1A73E8" selcted />
              <Section Icon={LocalOffer} title="Promotion" color="green" />
         </div>

         <div className='emailList__list'>
          {
            emails.map(({id,data:{message,subject,to,timeStamp}}) =>(
              <EmailRow
              key={id}
              title={to}
              subject={subject}
              description={message}
              time={new Date(timeStamp?.seconds * 1000).toUTCString()}
              />
            ))
          }
         
         </div>

    </div>
  )
}

export default EmailList;