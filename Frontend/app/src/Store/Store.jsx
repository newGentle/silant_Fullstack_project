import { configureStore } from '@reduxjs/toolkit';
import AuthSlicer from './Slicers/AuthSlicer';
import MainPageSlicer from './Slicers/MainPageSlicer';

export default configureStore({
    reducer: {
        login: AuthSlicer,
        machine: MainPageSlicer
    }
})