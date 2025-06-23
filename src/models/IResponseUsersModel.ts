import type {IUser} from "./IUser.ts";

export interface IResponseUsersModel {
    total: number,
    skip: number,
    limit: number,
    users: IUser[]
}