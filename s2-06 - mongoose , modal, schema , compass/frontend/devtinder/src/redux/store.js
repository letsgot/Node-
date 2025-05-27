import { configureStore } from "@reduxjs/toolkit";
import userslice from './slicers/userSlice'
const store = configureStore({
    reducer: {
        user: userslice
    }
})

export default store;