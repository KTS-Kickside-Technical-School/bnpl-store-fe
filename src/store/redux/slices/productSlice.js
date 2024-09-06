import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axiosInstance';
import { toast } from 'react-toastify';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axiosInstance.get('/api/v1/product/view-all-products');
    return response.data;
  }
);

export const fetchSingleProduct = createAsyncThunk('products/fetchSingleProduct', async (id) => {
  const response = await axiosInstance.get(`/api/v1/product/view-specific-product/${id}`);
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    product: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        toast.info("Loading products...", { toastId: 'loading-products' });
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload.data.products;
        toast.success("Products loaded successfully!", { toastId: 'products-loaded-success' });
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        toast.error(state.error, { toastId: 'products-load-error' });
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        state.status = 'loading';
        toast.info("Loading single product...", { toastId: 'loading-single-product' });
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload.data.product;
        toast.success("Product loaded successfully!", { toastId: 'succed-single-product' });
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        toast.error(state.error, { toastId: 'product-load-error' });
      });
  },
});

export default productSlice.reducer;
