import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axiosInstance';
import { toast } from 'react-toastify';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axiosInstance.get('/api/v1/product/customer-view-products');
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
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload.data.products;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        if (state.error === "Request failed with status code 404") {
          state.error = "No products found";
        }
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
