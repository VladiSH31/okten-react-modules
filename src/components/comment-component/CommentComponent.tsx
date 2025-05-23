import './CommentComponent.css'
import {type FC} from 'react';
import type {IComment} from "../../models/IComment.ts";

type CommentProps = {
    comment: IComment
}


const CommentComponent: FC<CommentProps> = ({comment}) => {
    return (
        <div>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">
                    <span className="font-semibold">User:</span> {comment.user.fullName} (@{comment.user.username})
                </p>
                <p className="text-base font-bold text-gray-800 mb-2">Post ID: {comment.postId}</p>
                <p className="text-sm text-gray-600">{comment.body}</p>
                <p className="text-sm text-gray-500 mt-2">
                    <span className="font-semibold">Likes:</span> {comment.likes}
                </p>
            </div>
        </div>
    );
};

export default CommentComponent;