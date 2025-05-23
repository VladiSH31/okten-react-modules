import type {IComment} from "../models/IComment.ts";

const commentsUrl = import.meta.env.VITE_BASE_URL + '/comments'

type CommentsData = {
    comments: IComment[]
    total: number,
    skip: number,
    limit: number,
}

export const loadComments = async (): Promise<IComment[]> => {
    const res = await fetch(commentsUrl)
    const data: CommentsData = await res.json()
    return data.comments;
}