import type {IUsersResponseModel} from "../models/IUsersResponseModel.ts";
import type {ICartsResponseModel} from "../models/ICartsResponseModel.ts";


const baseUrl = 'https://dummyjson.com'

export const userService = {
    async getAllUsers():Promise<IUsersResponseModel> {
        return await fetch(baseUrl+ '/users')
            .then(res => res.json())

}
}

export const cartService = {
    async getAllCarts():Promise<ICartsResponseModel> {
        return await fetch(baseUrl+ '/carts')
            .then(res => res.json())

    },
    async getCartsById(userId:string):Promise<ICartsResponseModel> {

        return await fetch(baseUrl + '/carts/user/' + userId)
            .then(res => res.json())
    }
}