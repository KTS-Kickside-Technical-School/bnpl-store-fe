import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice.js';
import cartReducer from './slices/cartSlice.js';
import userSlice from "./slices/userSlice.js";
import authSlice from "./slices/authSlice.js";

const reduxStore = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer,
    user: userSlice,
    auth: authSlice
  },
});

export default reduxStore;
