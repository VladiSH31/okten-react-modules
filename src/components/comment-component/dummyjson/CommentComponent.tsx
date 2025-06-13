import './CommentComponent.css'
import type {FC} from "react";
import type {ICommentsDummyjson} from "../../../models/comments/dummyjson/ICommentsDummyjson.ts";

type CommentsPropsDummyJson = {
    item: ICommentsDummyjson
}

const CommentComponent:FC<CommentsPropsDummyJson> = ({item}) => {
    return (
        <div className="comment-card bg-white border border-gray-200 rounded-lg p-4 mb-3">
            {/* Заголовок */}
            <h3 className="text-base font-semibold text-gray-800 mb-2">{item.user.fullName}</h3>

            {/* Мета-інформація в одному рядку */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
                <span><strong>Comment ID:</strong> {item.id}</span>
                <span><strong>Username:</strong> {item.user.username}</span>
                <span><strong>Post ID:</strong> {item.postId}</span>
            </div>

            {/* Тіло коментаря */}
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">{item.body}</p>

            {/* Лайки */}
            <div className="text-xs text-gray-500">
                <strong>Likes:</strong> <span className="text-blue-600 font-medium">{item.likes}</span>
            </div>
        </div>
    );
};

export default CommentComponent;