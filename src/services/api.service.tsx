import {urls} from "../constants/urls.ts";
import type {IUser} from "../models/IUser.ts";

export const usersService = {
    getUsers: async ():Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then(value => value.json());
    },
    getUser: async (id:number) => {
        return await fetch(urls.users.byId(id))
            .then(value => value.json());
    }

}
