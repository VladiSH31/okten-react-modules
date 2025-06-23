import type {IResponseUsersModel} from "../models/IResponseUsersModel.ts";

const baseUrl = 'https://dummyjson.com/'

export const getUsers = async (): Promise<IResponseUsersModel> => {
    return await fetch(baseUrl + 'users')
        .then(res => res.json())

}