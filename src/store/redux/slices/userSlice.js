import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axios/axiosInstance";

export const userViewProfile = createAsyncThunk(
  "user/userViewProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/api/v1/user/user-view-profile");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || "Failed to fetch profile");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null, 
    status: "idle", 
    error: null,   
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userViewProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userViewProfile.fulfilled, (state, action) => {
        state.status = "succeeded"; 
        state.profile = action.payload.data; 
        state.error = null;
      })
      .addCase(userViewProfile.rejected, (state, action) => {
        state.status = "failed";
        state.profile = null; 
        state.error = action.payload || "Failed to load profile";
      });
  },
});

export default userSlice.reducer;
