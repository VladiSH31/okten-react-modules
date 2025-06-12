import './PostsComponent.css'
import {useEffect, useState} from "react";
import type {IPostDummyJson} from "../../../models/posts/dummyjson/IPostDummyJson.ts";
import {getDummyJson} from "../../../services/Global.api.service.ts";
import type {IBaseResponseModel} from "../../../models/IBaseResponseModel.ts";
import PostComponent from "../../post-component/dummyjson/PostComponent.tsx";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPostDummyJson[]>([]);

    useEffect(() => {
        getDummyJson<IBaseResponseModel & {posts: IPostDummyJson[]}>('posts')
            .then(({ posts }) => setPosts(posts))
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