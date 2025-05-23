import type {IPost} from "../models/IPost.ts";

const basePostUrl = import.meta.env.VITE_BASE_URL + '/posts'

export const loadPosts = async ():Promise<IPost[]> => {
    return await fetch(basePostUrl)
        .then((response) => response.json())

}