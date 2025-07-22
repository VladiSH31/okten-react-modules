import type {IPost} from "../../../models/IPost.ts";
import {createAsyncThunk, createSlice, isFulfilled, type PayloadAction} from "@reduxjs/toolkit";
import {apiService} from "../../../services/api.service.ts";

type PostsSliceType = {
    posts: IPost[],
    post: IPost | null
    loadState: boolean
}

const initialState: PostsSliceType = {posts: [], post: null, loadState: false};

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await apiService.posts.getAll();
            return thunkAPI.fulfillWithValue(posts)
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
)

const loadPost = createAsyncThunk(
    'postSlice/loadPost',
    async (id: string, thunkAPI) => {
        try {
            const post = await apiService.posts.getById(id);
            return thunkAPI.fulfillWithValue(post)
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
)

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.loadState = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(
                loadPosts.fulfilled,
                (state, action: PayloadAction<IPost[]>) => {
                    state.posts = action.payload
                })
            .addCase(
                loadPosts.rejected,
                (state, action) => {
                    console.log(state);
                    console.log(action);
                })
            .addCase(
                loadPost.fulfilled, (state, action: PayloadAction<IPost>) => {
                    state.post = action.payload
                }
            )
            .addMatcher(isFulfilled(loadPost, loadPosts), (state) => {
                state.loadState = true
            })
})

export const postsSliceActions = {
    ...postSlice.actions, loadPosts, loadPost,
}
