import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios/axiosInstance";
import { toast } from "react-toastify";

export const createAccount = createAsyncThunk('auth/userCreateAccount', async (userData, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post('/api/v1/auth/register', userData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data.message : error.message);
    }
});

export const verfiyAccount = createAsyncThunk('/auth/userVerifyAccount', async (data, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post('/api/v1/auth/verify-email', data)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data.message : error.message);
    }
})

export const userLogin = createAsyncThunk('/auth/userLogin', async (data, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post('/api/v1/auth/login', data)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data.message : error.message);
    }
})

export const userLogout = createAsyncThunk("/auth/userLogout", async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post('/api/v1/auth/logout');
        return response.data
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        status: "idle",
        error: null,
        isAccountCreated: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createAccount.pending, (state) => {
                state.status = 'loading';
                state.isLoggedIn = false;
                state.isAccountCreated = false;
                toast.info("Creating account, please wait..", { toastId: 'creating-account' });
            })
            .addCase(createAccount.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.isLoggedIn = false;
                state.isAccountCreated = true;
                toast.success("Account created successfully!", { toastId: 'account-created-successfully' });
            })
            .addCase(createAccount.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload
                toast.error(state.error, { toastId: 'creating-account-failed' });
            })
            .addCase(verfiyAccount.pending, (state) => {
                state.status = "loading";
                state.isLoggedIn = false;
                toast.info("Verifying account, please wait..", { toastId: 'verifying-account' });
            })
            .addCase(verfiyAccount.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.isLoggedIn = false;
            })
            .addCase(verfiyAccount.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload
                toast.error(state.error, { toastId: 'verifying-account-failed' });
            })
            .addCase(userLogin.pending, (state) => {
                state.status = "loading";
                state.isLoggedIn = false;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.isLoggedIn = true;
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload
                toast.error(state.error, { toastId: 'logging-in-failed' });
            })
            .addCase(userLogout.pending, (state) => {
                state.status = "loading";
            })
            .addCase(userLogout.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.isLoggedIn = false;
                toast.success("Logged out successfully!", { toastId: 'logged-out-successfully' });
            })
            .addCase(userLogout.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload
                toast.error(state.error, { toastId: 'logging-out-failed' });
            });
    }
});

export default authSlice.reducer;
