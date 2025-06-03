import {type FC} from 'react';
import type {IPost} from "../../models/IPost.ts";

type UserPostProps = {
    post: IPost
}

const UserPostComponent:FC<UserPostProps> = ({post}) => {
    return (
        <div>
            <div>{post.title}</div>
            <div>{post.id}</div>
            <div>{post.userId}</div>
            <div>{post.body}</div>
        </div>
    );
};

export default UserPostComponent;