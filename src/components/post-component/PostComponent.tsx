import './PostComponent.css'
import type {IPost} from "../../models/IPost.ts";
import type {FC} from "react";

type PostPropsType = {
    post: IPost
}

const PostComponent:FC<PostPropsType> = ({post}) => {
    return (
        <div>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <div>{post.id}</div>
        </div>
    );
};

export default PostComponent;