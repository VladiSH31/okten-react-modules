import type {IUser} from "../../models/IUser.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {usersService} from "../../services/api.services.tsx";

type UserSliceType = {
    users: IUser[]
}

const initialUserState: UserSliceType = {users: []}

const loadAllUsers = createAsyncThunk(
    'userSlice/loadAllUsers',
    async (_, thunkAPI) => {

        try {
            const users = await usersService.getAllUsers()
                .then(value => value)
            return thunkAPI.fulfillWithValue(users)
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Error' + e)
        }

    }
)

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialUserState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadAllUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload
        })
})

export const userSliceActions = {...userSlice.actions, loadAllUsers}