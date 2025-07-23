import axios from 'axios';
import type {IUser} from "../models/IUser.ts";
import type {IPost} from "../models/IPost.ts";
import type {IComment} from "../models/IComment.ts";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {},
});


export const usersService = {
    getAllUsers: async (): Promise<IUser[]> => {
        const {data} = await axiosInstance.get<IUser[]>('/users');
        return data
    }
}

export const postsService = {
    getAllPosts: async ():Promise<IPost[]> => {
        const response = await axiosInstance.get<IPost[]>('/posts');
        return response.data
    }
}

export const commentsService = {
    getAllComments: async (): Promise<IComment[]> => {
        const {data} =await axiosInstance.get<IComment[]>('/comments');
            return data
    }
}

