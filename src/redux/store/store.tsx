import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../slices/user-slice/userSlice.tsx";
import {postSlice} from "../slices/post-slice/postSlice.tsx";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer
    }
})