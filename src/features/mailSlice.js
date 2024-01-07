import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
   sendMessageIsOpen:false,
   selectedMail:null
};



export const mailSlice = createSlice({
  name: 'mail',
  initialState,

  reducers: {
    selectedMail:(state,action) =>{
      state.selectedMail = action.payload;
    },
 openSendMessage:state =>{
   state.sendMessageIsOpen =  true;
 },
 closeSendMessage:state =>{
  state.sendMessageIsOpen = false;
 }
  },

 
});

export const {openSendMessage,closeSendMessage,selectedMail} = mailSlice.actions;

export const selectsendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectSelectedMail = (state)=> state.mail.selectedMail

export default mailSlice.reducer;
