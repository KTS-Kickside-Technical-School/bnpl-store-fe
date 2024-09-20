import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axios/axiosInstance";

export const userViewProfile = createAsyncThunk(
  "user/userViewHisProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/api/v1/user/user-view-profile");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch profile");
    }
  }
);

const initialState = {
  profile: null,
  status: "idle",
  error: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userViewProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userViewProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload?.data?.userProfile || null;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(userViewProfile.rejected, (state, action) => {
        state.status = "failed";
        state.profile = null;
        state.error = action.payload || "Failed to load profile";
      });
  },
});

export default userSlice.reducer;
