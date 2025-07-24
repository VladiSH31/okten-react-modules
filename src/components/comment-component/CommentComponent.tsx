import './CommentComponent.css'
import type {IComment} from "../../models/IComment.ts";
import type {FC} from "react";

type CommentPropsType = {
    comment: IComment
}

const CommentComponent:FC<CommentPropsType> = ({comment}) => {
    return (
        <div>
            <div>{comment.name}</div>
            <div>{comment.id}</div>
            <div>{comment.body}</div>
        </div>
    );
};

export default CommentComponent;