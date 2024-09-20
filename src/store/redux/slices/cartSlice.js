import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios/axiosInstance";

// Thunks
export const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async ({ productId, quantity }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`/api/v1/cart/add-update-product-to-cart`, {
        productId,
        quantity,
      });
      return response.data; // Ensure this matches the API structure
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCartItems = createAsyncThunk(
  "cart/VewAllCartItems",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/api/v1/cart/view-cart-items");
      return response.data; // Ensure this matches the API structure
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalPrice: 0,
    totalQuantity: 0,
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProductToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(addProductToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })

      .addCase(getCartItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload.data) {
          state.cartItems = action.payload.data.cartItems;

          state.totalQuantity = state.cartItems.reduce(
            (total, item) => total + item.quantity,
            0
          );
          state.totalPrice = state.cartItems.reduce(
            (total, item) => total + item.quantity * (item.productId.price || 0),
            0
          );
        }
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export default cartSlice.reducer;
