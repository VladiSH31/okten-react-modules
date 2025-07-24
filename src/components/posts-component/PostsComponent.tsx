import './PostsComponent.css'
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {postSliceActions} from "../../redux/slices/postSlice.ts";
import PostComponent from "../post-component/PostComponent.tsx";

const PostsComponent = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.postSlice.posts);

    useEffect(() => {
        dispatch(postSliceActions.loadAllPosts())
    }, [posts.length, dispatch]);

    return (
        <div>
            {
                posts.map(post => <PostComponent post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;