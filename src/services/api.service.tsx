import axios from 'axios';
import type {IUser} from "../models/IUser.ts";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {},
});

export const getAllUsers = async ():Promise<IUser[]> => {
  const response = await axiosInstance.get<IUser[]>('/users');
  return response.data
}