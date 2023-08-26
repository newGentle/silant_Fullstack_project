import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const header = {
    headers: {
        "Content-type": "application/json",
        "Accept": "*/*",
        // "Authorization": "Bearer " + localStorage.getItem("accessToken")
    },
};

export const MachineData = createAsyncThunk(
    "machine/MachineData",
    async (factoryNumberOfMachine, { rejectWithValue }) => {
        try {
            const {data} = await axios.get(
                'http://127.0.0.1:8000/api/v1/machine/' + factoryNumberOfMachine + '/',
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
    data: null
};

const MachineSlicer = createSlice({
    name: "machine",
    initialState,
    
    extraReducers: (builder) => {
        builder.addCase(MachineData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'OK';
            state.loading = false;
            state.success = true;
        });

        builder.addCase(MachineData.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(MachineData.rejected, (state, action) => {
            state.error = action.payload;
            state.data = null;
            state.loading = false;
            state.status = "BAD";
        });
    },
});

export default MachineSlicer.reducer;