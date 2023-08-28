import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const ComplaintsData = createAsyncThunk(
    "complaints/ComplaintsData",
    async (accessToken, { rejectWithValue }) => {
        try {
            
            const header = {
                headers: {
                    "Content-type": "application/json",
                    "Accept": "*/*",
                    "Authorization": "Bearer " + accessToken
                },
            };

            const {data} = await axios.get(
                'http://127.0.0.1:8000/api/v1/complaints/',
                header
            );
         
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

const initialState = {
    loading: false,
    error: null,
    success: false,
    status: null,
};

const ComplaintsSlicer = createSlice({
    name: "complaints",
    initialState,
    
    extraReducers: (builder) => {
        builder.addCase(ComplaintsData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'OK';
            state.loading = false;
            state.success = true;
        });

        builder.addCase(ComplaintsData.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(ComplaintsData.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.status = "BAD";
        });
    },
});

export default ComplaintsSlicer.reducer;