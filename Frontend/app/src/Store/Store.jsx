import { configureStore } from '@reduxjs/toolkit';
import AuthSlicer from './Slicers/AuthSlicer';
import MachineSlicer from './Slicers/MachineSlicer';
import OrderSlicer from './Slicers/OrderSlicer';

export default configureStore({
    reducer: {
        login: AuthSlicer,
        order: OrderSlicer,
        machine: MachineSlicer
    }
})