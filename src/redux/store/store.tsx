import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../slices/user-slice/userSlice.tsx";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
    }
})