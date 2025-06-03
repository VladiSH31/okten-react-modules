import {type FC, useEffect, useState} from 'react';
import type {IPost} from "../../models/IPost.ts";
import {postsService} from "../../services/api.service.tsx";
import UserPostComponent from "../user-post-component/UserPostComponent.tsx";

type UserPostsProps = {
    userId: string
}

const UserPostsComponent:FC<UserPostsProps> = ({userId}) => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {

        if (userId) {
            postsService.getALLPostsByUserId(+userId)
                .then(value => setPosts(value))
        }

    }, [userId]);

    return (
        <div>

            {
                posts.map((post) => <UserPostComponent key={post.id} post={post}/>)
            }

        </div>
    );
};

export default UserPostsComponent;