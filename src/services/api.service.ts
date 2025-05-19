import type {IUser} from "../models/IUser.ts";

export const getUsers = async (): Promise<IUser[]> => {
    return fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response) => response.json())
}