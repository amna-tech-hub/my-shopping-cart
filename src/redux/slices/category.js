import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const category=createAsyncThunk('products/fetchByCategory',
    async(item)=>{
        const response=await fetch(`https://fakestoreapi.com/products/category/${item}`)
        const data=await response.json()
        return data
    }

)

let categorySlice=createSlice({
    name:'Specific_Category',
    initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers:
  (builder)=>{
builder
.addCase(category.pending,(state,action)=>{
state.loading=true
})
.addCase(category.fulfilled,(state,action)=>{
    state.loading=false,
    state.items=action.payload
})
.addCase(category.rejected,(state,action)=>{
    state.error="network error ",
      state.loading = false;
})
  }
}
)


export default categorySlice.reducer