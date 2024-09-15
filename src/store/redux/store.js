import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice.js';

const reduxStore = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default reduxStore;
