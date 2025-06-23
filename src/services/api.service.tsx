import type {IResponseUsersModel} from "../models/IResponseUsersModel.ts";

const baseUrl = 'https://dummyjson.com'

export const getUsers = async (page:string): Promise<IResponseUsersModel> => {
    const limit = 30;
    const skip = limit *(+page) - limit;
    return await fetch(baseUrl + '/users' + '?skip=' + skip)
        .then(res => res.json())

}