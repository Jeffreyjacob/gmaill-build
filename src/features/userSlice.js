import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
 user: null
};



export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
   LoginAction: (state,action)=>{
    state.user = action.payload
   },
   LogoutAction:(state)=>{
    state.user = null
   }
  },

 
});

export const {LoginAction,LogoutAction} = userSlice.actions;
export const selectUser = (state) => state.user.user;


export default userSlice.reducer;