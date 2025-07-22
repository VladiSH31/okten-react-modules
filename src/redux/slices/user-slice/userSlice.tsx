import type {IUser} from "../../../models/IUser.ts";
import {createAsyncThunk, createSlice, isFulfilled, type PayloadAction} from "@reduxjs/toolkit";
import {apiService} from "../../../services/api.service.ts";

type UsersSliceType = {
    users: IUser[],
    user: IUser | null
    loadState: boolean
}

const initialState: UsersSliceType = {users: [], user: null, loadState: false};

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await apiService.users.getAll();
            thunkAPI.dispatch(usersSliceActions.changeLoadState(true))
            return thunkAPI.fulfillWithValue(users)
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
)

const loadUser = createAsyncThunk(
    'userSlice/loadUser',
    async (id: string, thunkAPI) => {
        try {
            const user = await apiService.users.getById(id);
            thunkAPI.dispatch(usersSliceActions.changeLoadState(true))
            return thunkAPI.fulfillWithValue(user)
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
)

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.loadState = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(
                loadUsers.fulfilled,
                (state, action: PayloadAction<IUser[]>) => {
                    state.users = action.payload
                })
            .addCase(
                loadUsers.rejected,
                (state, action) => {
                    console.log(state);
                    console.log(action);
                })
            .addCase(
                loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
                    state.user = action.payload
                }
            )
            .addMatcher(isFulfilled(loadUser, loadUsers), (state) => {
                state.loadState = true
            })
})

export const usersSliceActions = {
    ...userSlice.actions, loadUsers, loadUser,
}