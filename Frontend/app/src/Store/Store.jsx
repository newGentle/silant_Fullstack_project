import { configureStore } from '@reduxjs/toolkit';
import AuthSlicer from './Slicers/AuthSlicer';

export default configureStore({
    reducer: {
        login: AuthSlicer,
    }
})