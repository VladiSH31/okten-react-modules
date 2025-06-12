import './PostComponent.css'
import type {FC} from "react";
import type {IPostDummyJson} from "../../../models/posts/dummyjson/IPostDummyJson.ts";

type PostsPropsDummyJson= {
    item: IPostDummyJson
}

const PostComponent:FC<PostsPropsDummyJson> = ( {item}) => {
    return (
        <div>
            <div className="post-card bg-white shadow-md rounded-lg p-6 mb-4">
                {/* Заголовок поста */}
                <h2 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h2>

                {/* ID поста */}
                <p className="text-sm text-gray-500 mb-2">
                    <span className="font-semibold">Post ID:</span> {item.id}
                </p>

                {/* ID користувача */}
                <p className="text-sm text-gray-500">
                    <span className="font-semibold">User ID:</span> {item.userId}
                </p>

                {/* Тіло поста */}
                <p className="text-gray-700 mb-4">{item.body}</p>

                {/* Теги */}
                <div className="tags mb-4">
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
                            >
              {tag}
            </span>
                        ))}
                    </div>
                </div>

                {/* Реакції */}
                <div className="reactions flex items-center justify-between mb-4">
                    <p className="text-sm text-gray-500">
                        <span className="font-semibold">Likes:</span> {item.reactions.likes}
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-semibold">Dislikes:</span> {item.reactions.dislikes}
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-semibold">Views:</span> {item.views}
                    </p>
                </div>


            </div>
        </div>
    );
};

export default PostComponent;