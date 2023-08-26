import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const OrderData = createAsyncThunk(
    "order/OrderData",
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
                'http://127.0.0.1:8000/api/v1/order/',
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

const OrderSlicer = createSlice({
    name: "order",
    initialState,
    
    extraReducers: (builder) => {
        builder.addCase(OrderData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'OK';
            state.loading = false;
            state.success = true;
        });

        builder.addCase(OrderData.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(OrderData.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.status = "BAD";
        });
    },
});

export default OrderSlicer.reducer;