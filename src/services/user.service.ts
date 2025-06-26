import axios from 'axios';
import type {IUser} from "../models/IUser.ts";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'},
});

export const getUsers = async (): Promise<IUser[]> => {
    const {data} = await axiosInstance.get<IUser[]>('/users');
    return data
}

// axiosInstance.interceptors.request.use( (request) => {
//     console.log(request);
//     request.headers.set('XXX', "XXXX")
//     return request;
// })
//
// axiosInstance.interceptors.response.use((response) => {
//     console.log(response);
//     return response;
// })

export const saveUsers = async (user: IUser):Promise<IUser> => {
    const {data} = await axiosInstance.post<IUser>('/users', user)
    return data
}
