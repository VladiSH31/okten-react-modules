import './ComplexComponent.css';
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice.ts";
import {postSliceActions} from "../../redux/slices/postSlice.ts";
import {commentSliceActions} from "../../redux/slices/commentSlice.ts";
import {ComplexUserComponent} from "../complex-single-component/ComplexUserComponent.tsx";
import ComplexPostComponent from "../complex-single-component/ComplexPostComponent.tsx";
import ComplexCommentComponent from "../complex-single-component/ComplexCommentComponent.tsx";

const ComplexComponent = () => {
    const dispatch = useAppDispatch();

    const users = useAppSelector(state => state.userSlice.users)
    const posts = useAppSelector(state => state.postSlice.posts)
    const comments = useAppSelector(state => state.commentSlice.comments)

    useEffect(() => {
        if (!users.length) {
            dispatch(userSliceActions.loadAllUsers())
        }
        if (!posts.length) {
            dispatch(postSliceActions.loadAllPosts())
        }
        if (!comments.length) {
            dispatch(commentSliceActions.loadAllComments())
        }
    }, [users.length, posts.length, comments.length, dispatch]);


    return (
        <div>
            {
                users && users.map(user => <ComplexUserComponent user={user}/>)
            }
            {
                posts && posts.map(post => <ComplexPostComponent post={post}/> )
            }
            {
                comments && comments.map(comment => <ComplexCommentComponent comment={comment}/>)
            }
        </div>
    );
};

export default ComplexComponent;