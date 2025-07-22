import {useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {postsSliceActions} from "../../redux/slices/post-slice/postSlice.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {Link} from "react-router-dom";
import './PostsPage.css';

const PostsPage = () => {
    const {posts, loadState} = useAppSelector(state => state.postSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!posts.length) {
            dispatch(postsSliceActions.loadPosts())
        }
    }, [dispatch, posts.length]);


    return (
        <div className="posts-container">
            <h1 className="posts-title">Posts</h1>
            {!loadState && posts.length === 0 && <div className="loading-text">Loading...</div>}
            <div className="posts-grid">
                {
                    posts.map(post => (
                        <Link to={`/posts/${post.id}`} key={post.id} className="post-card">
                            <h2 className="post-card-title">{post.title}</h2>
                            <p className="post-card-body">{post.body}</p>
                            <p className="post-card-link">Read More</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default PostsPage;