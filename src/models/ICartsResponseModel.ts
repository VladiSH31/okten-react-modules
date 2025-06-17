import type {ICartModel} from "./carts/ICartModel.ts";

export interface ICartsResponseModel {
    total: number,
    skip: number,
    limit: number,
    users: ICartModel[]
}