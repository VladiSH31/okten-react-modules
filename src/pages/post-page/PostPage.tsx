import {Link, useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {postsSliceActions} from "../../redux/slices/post-slice/postSlice.tsx";
import './PostPage.css';

const PostPage = () => {
    const {id} = useParams<{ id: string }>();
    const {post, loadState} = useAppSelector(({postSlice}) => postSlice)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(postsSliceActions.loadPost(id))
        }
    }, [id, dispatch]);

    return (
        <div className="post-page-container">
            <Link to="/posts" className="back-link">
                &larr; Back to Posts
            </Link>

            {!post && !loadState && <div className="loading-text">Loading...</div>}

            {post && (
                <div className="post-details-card">
                    <h1 className="post-details-title">{post.title}</h1>
                    <p className="post-details-body">{post.body}</p>
                </div>
            )}
        </div>
    );
};

export default PostPage;
