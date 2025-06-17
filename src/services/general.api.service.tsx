import type {IUsersResponseModel} from "../models/IUsersResponseModel.ts";
import type {ICartsResponseModel} from "../models/ICartsResponseModel.ts";


const baseUrl = 'https://dummyjson.com'

export const userService = {
    async getAllUsers():Promise<IUsersResponseModel> {
        return await fetch(baseUrl+ '/users')
            .then(res => res.json())

}
}

export const cartsService = {
    async getAllCarts():Promise<ICartsResponseModel> {
        return await fetch(baseUrl+ '/cartss')
            .then(res => res.json())

    },
    async getCartsById(id:number):Promise<ICartsResponseModel> {
        return await fetch(baseUrl + '/carts/user/' + id)
            .then(res => res.json())
    }
}