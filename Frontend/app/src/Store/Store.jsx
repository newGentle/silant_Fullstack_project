import { configureStore } from '@reduxjs/toolkit';
import AuthSlicer from './Slicers/AuthSlicer';
import MachineSlicer from './Slicers/MachineSlicer';
import OrderSlicer from './Slicers/OrderSlicer';
import UserInfoSlicer from './Slicers/UserInfoSlicer';
import MaintenanceSlicer from './Slicers/MaintenanceSlicer';
import ComplaintsSlicer from './Slicers/ComplaintsSlicer';

export default configureStore({
    reducer: {
        login: AuthSlicer,
        order: OrderSlicer,
        machine: MachineSlicer,
        maintenance: MaintenanceSlicer,
        complaints: ComplaintsSlicer,
        user: UserInfoSlicer,
        
    }
})