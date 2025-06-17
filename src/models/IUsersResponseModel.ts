import type {IUserModel} from "./users/IUserModel.ts";

export interface IUsersResponseModel {
    total: number,
    skip: number,
    limit: number,
    users: IUserModel[]
}