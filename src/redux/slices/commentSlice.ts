import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IComment} from "../../models/IComment.ts";
import {commentsService} from "../../services/api.services.tsx";

type CommentSliceType= {
    comments: IComment[]
}

const initialCommentState: CommentSliceType = {
    comments: []
};

const loadAllComments = createAsyncThunk('loadAllComments',
    async (_, thunkAPI) => {
    try {
        const comments = await commentsService.getAllComments();
        return thunkAPI.fulfillWithValue(comments)
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('Error:' +e)
    }
    })

export const commentSlice = createSlice({
    name: 'postSlice',
    initialState: initialCommentState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadAllComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload;
        })
})

export const commentSliceActions = { ...commentSlice.actions, loadAllComments}