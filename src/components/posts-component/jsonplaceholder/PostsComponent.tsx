import './PostsComponent.css'
import {useEffect, useState} from "react";
import type {IPostJSONPlaceHolder} from "../../../models/posts/jsonplaceholder/IPostJSONPlaceHolder.ts";
import {getJSONPlaceHolder} from "../../../services/Global.api.service.ts";
import PostComponent from "../../post-component/jsonplaceholder/PostComponent.tsx";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPostJSONPlaceHolder[]>([])
    useEffect(() => {
        getJSONPlaceHolder<IPostJSONPlaceHolder[]>('posts')
            .then(value => setPosts(value))
    }, []);

    return (
        <div>
            {
                posts.map(value => <PostComponent key={value.id} item={value}/>)
            }
        </div>
    );
};

export default PostsComponent;