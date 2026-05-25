import { configureStore } from '@reduxjs/toolkit';
import fetchProductReducer from './slices/fetchProduct';
import  productCategoryReducer  from './slices/productCategory';
import  categoryReducer  from './slices/category';
import favouritesReducer from './slices/favourite';
import cartItemReducer from './slices/cartItem';
export const store = configureStore({
  reducer: {
    fetchProducts:fetchProductReducer,
    productCategory:productCategoryReducer,
    category:categoryReducer,
    favourites:favouritesReducer,
    cartItem:cartItemReducer
  },
});