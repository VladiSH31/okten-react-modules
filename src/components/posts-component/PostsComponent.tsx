import './PostsComponent.css'

import {useEffect, useState} from 'react';
import {loadPosts} from "../../service/api.service.ts";
import type {IPost} from "../../models/IPost.ts";
import PostComponent from "../post-component/PostComponent.tsx";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        loadPosts().then(post => setPosts(post))
    }, []);

    return (
        <div>
            {
                posts.map(value => <PostComponent key={value.id} post={value}/>)
            }
        </div>
    );
};

export default PostsComponent;