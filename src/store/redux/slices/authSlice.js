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
        builder.addCase(createAccount.pending, (state) => {
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
                console.log(state.error)
                toast.error(state.error + "kkk", { toastId: 'creating-account-failed' });
            });
    }
});

export default authSlice.reducer;
