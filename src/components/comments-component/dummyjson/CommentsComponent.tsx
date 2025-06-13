import './CommentsComponent.css'
import {useEffect, useState} from "react";
import type {ICommentsDummyjson} from "../../../models/comments/dummyjson/ICommentsDummyjson.ts";
import {getDummyJson} from "../../../services/Global.api.service.ts";
import type {IBaseResponseModel} from "../../../models/IBaseResponseModel.ts";
import CommentComponent from "../../comment-component/dummyjson/CommentComponent.tsx";

const CommentsComponent = () => {
    const [comments, setComments] = useState<ICommentsDummyjson[]>([])
    useEffect(() => {
        getDummyJson<IBaseResponseModel & {comments: ICommentsDummyjson[]}>('comments')
            .then(({ comments }) => setComments(comments))
    }, []);

    return (
        <div>
            {
                comments.map(value => <CommentComponent item={value}/>)
            }
        </div>
    );
};

export default CommentsComponent;