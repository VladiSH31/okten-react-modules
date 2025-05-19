import type {IUser} from "../models/IUser.ts";

export const getUsers = async (): Promise<IUser[]> => {
    return fetch(import.meta.env.VITE_API_URL)
        .then((response) => response.json())
}

export const getUser = async (id:string): Promise<IUser> => {
    return fetch(import.meta.env.VITE_API_URL + '/' +id)
        .then((response) => response.json())
}