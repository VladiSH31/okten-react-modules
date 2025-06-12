import {baseUrls} from "../urls/urls.ts";
import type {IUserJSONPlaceHolder} from "../models/users/jsonplaceholder/IUserJSONPlaceHolder.ts";

export const getJSONPlaceHolder = async (endpoint: string):Promise<IUserJSONPlaceHolder[]> => {
    return await fetch(baseUrls.jsonPlaceHolder + endpoint)
        .then((response) => response.json())
}

export const getDummyJson = async (endpoint: string) => {
    return await fetch(baseUrls.dummyJson + endpoint)
        .then((response) => response.json())
}