import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice.js';
import cartReducer from './slices/cartSlice.js';
import userSlice from "./slices/userSlice.js";

const reduxStore = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer,
    user: userSlice
  },
});

export default reduxStore;
