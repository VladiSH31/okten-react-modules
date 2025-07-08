import axios from 'axios';
import type {IBaseResponseDummyModel} from "../models/IBaseResponseDummyModel.ts";

export const getAll = async (endpoint: string) => {
    return await fetch('https://jsonplaceholder.typicode.com' + endpoint)
        .then((response) => response.json())
}

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {},
});

export const axiosGetAll = async (endpoint: string):Promise<IBaseResponseDummyModel> => {
    const response = await axiosInstance.get(endpoint);
    return response.data
}