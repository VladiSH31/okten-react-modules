import './PostComponent.css'
import {type FC} from 'react';
import type {IPost} from "../../models/IPost.ts";

type PostsProps = {
    post: IPost
}

const PostComponent: FC<PostsProps> = ({post}) => {
    return (
        <div>
            <div className="m-5 border border-gray-300 rounded-lg p-6 mb-6 shadow-lg bg-gradient-to-r from-white to-gray-100">
                <div className="text-xl font-semibold text-blue-600 mb-2">User ID: {post.userId}</div>
                <div className="text-sm text-gray-500 mb-4">Post ID: {post.id}</div>
                <div className="text-lg font-bold text-gray-800 mb-3">Title: {post.title}</div>
                <div className="text-base text-gray-700 leading-relaxed">Post: {post.body}</div>
            </div>
        </div>
    );
};

export default PostComponent;