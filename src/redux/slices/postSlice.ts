import type {IPost} from "../../models/IPost.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {postsService} from "../../services/api.services.tsx";

type PostSliceType = {
    posts: IPost[];
}

const initialPostState: PostSliceType = {posts: []};

const loadAllPosts = createAsyncThunk(
    'postSlice/loadAllPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await postsService.getAllPosts();
            return thunkAPI.fulfillWithValue(posts);

        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Error:' + e)
        }
    }
)

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initialPostState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadAllPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;
        })
})

export const postSliceActions = {...postSlice.actions, loadAllPosts}
