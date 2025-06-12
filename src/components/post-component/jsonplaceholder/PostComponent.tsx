import './PostComponent.css'
import type {FC} from "react";
import type {IPostJSONPlaceHolder} from "../../../models/posts/jsonplaceholder/IPostJSONPlaceHolder.ts";

type PostPropsJSONPlaceHolder = {
    item: IPostJSONPlaceHolder
}


const PostComponent:FC<PostPropsJSONPlaceHolder> = ({item}) => {
    return (
        <div className="post-card bg-white shadow-md rounded-lg p-6 mb-4">
            {/* Заголовок поста */}
            <h2 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h2>

            {/* ID поста */}
            <p className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">Post ID:</span> {item.id}
            </p>

            {/* Тіло поста */}
            <p className="text-gray-700 mb-4">{item.body}</p>

            {/* ID користувача */}
            <p className="text-sm text-gray-500">
                <span className="font-semibold">User ID:</span> {item.userId}
            </p>
        </div>
    );
};

export default PostComponent;