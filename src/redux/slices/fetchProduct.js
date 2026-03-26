import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// fetch api all items
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    
    return data;
  }
);

const productSlice = createSlice({
  name: 'fetchProducts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      // pending
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })

      // fulfilled
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })

      // rejected
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = "Something went wrong";
      });
  },
});

export default productSlice.reducer;

