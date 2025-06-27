import axios from 'axios';
import type {ICars} from "../models/ICars.ts";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1',
    headers: {},
});

export const getAllCars = async ():Promise<ICars[]> => {
    const response = await axiosInstance.get('/cars');
    return response.data;
}
