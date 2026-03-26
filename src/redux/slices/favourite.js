import { createSlice } from "@reduxjs/toolkit"


const favSlice=createSlice({
    name:'favourite',
    initialState:{
    items:[],
  
    // exist:false,
    // error:false,        jb db connect kry gye phir iss ko dekho gii
    // loading:false
    },
    reducers:{
    AddItems:(state,action)=> {  //action.payload contains the action you send to store
      state.items.push( action.payload)
    },
    RemoveItems: (state, action) => {
  // Hum ne filter kiya aur result ko wapas state.items mein daal diya
  state.items = state.items.filter((item) => item.id !== action.payload.id);
},
   
}})
export default favSlice.reducer
export const {AddItems,RemoveItems}=favSlice.actions