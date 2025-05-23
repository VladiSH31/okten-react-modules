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
                    <span className="font-semibold">Email:</span> {comment.email}
                </p>
                <p className="text-base font-bold text-gray-800 mb-2">{comment.name}</p>
                <p className="text-sm text-gray-600">{comment.body}</p>
            </div>
        </div>
    );
};

export default CommentComponent;