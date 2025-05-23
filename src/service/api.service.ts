import type {IComment} from "../models/IComment.ts";

const commentsUrl = import.meta.env.VITE_BASE_URL + '/comments'
 
 export const loadComments = async ():Promise<IComment[]> => {
     return await fetch(commentsUrl)
         .then((response) => response.json())

 }