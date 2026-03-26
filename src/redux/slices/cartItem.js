import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cartItems',
  initialState: {
    items: [],
  },
  reducers: {
    AddCartItems: (state, action) => {
      // Check karein ke item pehle se cart mein hai ya nahi
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // Agar hai, toh sirf quantity barha dein
        existingItem.quantity += 1;
      } else {
        // Agar naya hai, toh quantity: 1 ke saath add karein
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    
    RemoveCartItems: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    // Quantity Barhanay ke liye
    IncrementQty: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },

    // Quantity Kam karnay ke liye
    DecrementQty: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    }
  }
});

export default cartSlice.reducer;
export const { AddCartItems, RemoveCartItems, IncrementQty, DecrementQty } = cartSlice.actions;