import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const header = {
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
    },
};

export const UserLogin = createAsyncThunk(
    "auth/userLogin",
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                'http://127.0.0.1:8000/api/v1/token',
                { username, password},
                header
            );
            localStorage.setItem("userLogin", username);
            localStorage.setItem("accessToken", data.access);
            localStorage.setItem("Authenticated", true);
            console.log(data)
            return data;
        }
        catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

const accessToken = localStorage.getItem("accessToken")
    ? localStorage.getItem("accessToken")
    : null;

const initialState = {
    loading: false,
    accessToken,
    error: null,
    success: false,
    status: null,
    is_Auth: false
};

const AuthSlicer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem("accessToken")
            localStorage.removeItem("userLogin")
            localStorage.setItem("Authenticated", false)
            state.loading = false
            state.error = null
            state.success = false
            state.is_Auth = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(UserLogin.fulfilled, (state, action) => {
            state.accessToken = action.payload;
            state.status = 'OK';
            state.loading = false;
            state.success = true;
            state.is_Auth = true;
        });

        builder.addCase(UserLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(UserLogin.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.status = "BAD";
        });
    },
});

export const { logout } = AuthSlicer.actions
export default AuthSlicer.reducer;