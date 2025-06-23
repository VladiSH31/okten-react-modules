import type {IReqresResponseModel} from "../models/IReqresResponseModel.ts";

const baseReqresUrl = 'https://reqres.in'

export const getUsersPage = async (pg: number):Promise<IReqresResponseModel> => {
    return await fetch(baseReqresUrl + '/api/users?page=' + pg)
        .then(response => response.json())
}