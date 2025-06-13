import './CommentComponent.css'
import type {FC} from "react";
import type {ICommentsJSONPlaceHolder} from "../../../models/comments/jsonplaceholder/ICommentsJSONPlaceHolder.ts";

type CommentsPorpsJsonPlaceHolder = {
    item: ICommentsJSONPlaceHolder
}

const CommentComponent:FC<CommentsPorpsJsonPlaceHolder> = ({item}) => {
    return (
        <div className="comment-card bg-white shadow-md rounded-lg p-6 mb-4">
            {/* Ім'я коментаря */}
            <h2 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h2>

            {/* ID коментаря */}
            <p className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">Comment ID:</span> {item.id}
            </p>

            {/* Email автора */}
            <p className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">Email:</span> {item.email}
            </p>

            {/* ID поста */}
            <p className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">Post ID:</span> {item.postId}
            </p>

            {/* Тіло коментаря */}
            <p className="text-gray-700">{item.body}</p>
        </div>
    );
};

export default CommentComponent;