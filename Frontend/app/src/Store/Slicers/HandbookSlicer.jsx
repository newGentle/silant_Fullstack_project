import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const EngineData = createAsyncThunk(
    "engine/EngineData",
    async (id, { rejectWithValue }) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const header = {
                headers: {
                    "Content-type": "application/json",
                    Accept: "*/*",
                    Authorization: "Bearer " + accessToken,
                },
            };

            const { data } = await axios.get(
                "http://127.0.0.1:8000/api/v1/modelOfEngine/" + id,
                header
            );

            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const TransmissionData = createAsyncThunk(
    "transmission/TransmissionData",
    async (id, { rejectWithValue }) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const header = {
                headers: {
                    "Content-type": "application/json",
                    Accept: "*/*",
                    Authorization: "Bearer " + accessToken,
                },
            };

            const { data } = await axios.get(
                "http://127.0.0.1:8000/api/v1/modelOfTransmission/" + id,
                header
            );

            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const MainAxleData = createAsyncThunk(
    "mainaxle/MainAxleData",
    async (id, { rejectWithValue }) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const header = {
                headers: {
                    "Content-type": "application/json",
                    Accept: "*/*",
                    Authorization: "Bearer " + accessToken,
                },
            };

            const { data } = await axios.get(
                "http://127.0.0.1:8000/api/v1/modelOfMainAxle/" + id,
                header
            );

            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const SteeringAxleData = createAsyncThunk(
    "steeringaxle/SteeringAxleData",
    async (id, { rejectWithValue }) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const header = {
                headers: {
                    "Content-type": "application/json",
                    Accept: "*/*",
                    Authorization: "Bearer " + accessToken,
                },
            };

            const { data } = await axios.get(
                "http://127.0.0.1:8000/api/v1/modelOfSteeringAxle/" + id,
                header
            );

            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


export const TypeOfMaintenanceData = createAsyncThunk(
    "typeofmaintenance/TypeOfMaintenanceData",
    async (id, { rejectWithValue }) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const header = {
                headers: {
                    "Content-type": "application/json",
                    Accept: "*/*",
                    Authorization: "Bearer " + accessToken,
                },
            };

            const { data } = await axios.get(
                "http://127.0.0.1:8000/api/v1/typeOfMaintenance/" + id,
                header
            );

            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const TypeOfFailureData = createAsyncThunk(
    "typeoffailure/TypeOfFailureData",
    async (id, { rejectWithValue }) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const header = {
                headers: {
                    "Content-type": "application/json",
                    Accept: "*/*",
                    Authorization: "Bearer " + accessToken,
                },
            };

            const { data } = await axios.get(
                "http://127.0.0.1:8000/api/v1/typeOfFailure/" + id,
                header
            );
                console.log(data)
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

const initialState = {
    engine: null,
    transmission: null,
    mainaxle: null,
    steeringaxle: null,
    typeofmaintenance: null,
    typeoffailure: null,
    methodofrecovery: null,
    loading: false,
    error: null,
    success: false,
    status: null,
};

const HandbookSlicer = createSlice({
    name: "handbook",
    initialState,

    extraReducers: (builder) => {
        builder.addCase(EngineData.fulfilled, (state, action) => {
            state.engine = action.payload;
            state.status = "OK";
            state.loading = false;
            state.success = true;
        });

        builder.addCase(EngineData.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(EngineData.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.status = "BAD";
        });

        builder.addCase(TransmissionData.fulfilled, (state, action) => {
            state.transmission = action.payload;
            state.status = "OK";
            state.loading = false;
            state.success = true;
        });

        builder.addCase(TransmissionData.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(TransmissionData.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.status = "BAD";
        });

        builder.addCase(MainAxleData.fulfilled, (state, action) => {
            state.mainaxle = action.payload;
            state.status = "OK";
            state.loading = false;
            state.success = true;
        });

        builder.addCase(MainAxleData.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(MainAxleData.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.status = "BAD";
        });

        builder.addCase(SteeringAxleData.fulfilled, (state, action) => {
            state.steeringaxle = action.payload;
            state.status = "OK";
            state.loading = false;
            state.success = true;
        });

        builder.addCase(SteeringAxleData.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(SteeringAxleData.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.status = "BAD";
        });

        builder.addCase(TypeOfMaintenanceData.fulfilled, (state, action) => {
            state.typeofmaintenance = action.payload;
            state.status = "OK";
            state.loading = false;
            state.success = true;
        });

        builder.addCase(TypeOfMaintenanceData.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(TypeOfMaintenanceData.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.status = "BAD";
        });
        
        builder.addCase(TypeOfFailureData.fulfilled, (state, action) => {
            state.typeoffailure = action.payload;
            state.status = "OK";
            state.loading = false;
            state.success = true;
        });

        builder.addCase(TypeOfFailureData.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(TypeOfFailureData.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.status = "BAD";
        });
    },
});

export default HandbookSlicer.reducer;
