import axios from "axios";
import type {IUser} from "../models/IUser.ts";
import type {IPost} from "../models/IPost.ts";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const users = {
    getAll: () => axiosInstance.get<IUser[]>('/users').then(res => res.data),
    getById: (id: string) => axiosInstance.get<IUser>(`/users/${id}`).then(res => res.data)
}

const posts = {
    getAll: () => axiosInstance.get<IPost[]>('/posts').then(res => res.data),
    getById: (id: string) => axiosInstance.get<IPost>(`/posts/${id}`).then(res => res.data)
}

export const apiService = {
    users,
    posts
}
