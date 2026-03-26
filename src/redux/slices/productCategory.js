import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const productCategory = createAsyncThunk(
  "products/categories",async ()=>{
const res=await   fetch("https://fakestoreapi.com/products/categories")
const data=await res.json();
return data;
  })
  

const CatergorySlice = createSlice({
  name: 'AllCatrgory',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(productCategory.pending, (state, action) => {
      state.loading = true;
    })
     . addCase(productCategory.fulfilled, (state, action) => {
        state.loading = false,
         state.items = action.payload
      })
     . addCase(productCategory.rejected, (state) => {
        state.loading = false,
        state.error = "something went wrong";
      });
  },
});
export default CatergorySlice.reducer;
