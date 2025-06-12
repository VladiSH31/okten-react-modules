import {baseUrls} from "../urls/urls.ts";

export const getJSONPlaceHolder = async<T, > (endpoint: string):Promise<T> => {
    return await fetch(baseUrls.jsonPlaceHolder + endpoint)
        .then((response) => response.json())
}

export const getDummyJson = async<T, > (endpoint: string):Promise<T> => {
    return await fetch(baseUrls.dummyJson + endpoint)
        .then((response) => response.json())
}