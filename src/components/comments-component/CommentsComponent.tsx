import './CommentsComponent.css'
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {commentSliceActions} from "../../redux/slices/commentSlice.ts";
import CommentComponent from "../comment-component/CommentComponent.tsx";

const CommentsComponent = () => {

    const dispatch = useAppDispatch();
    const comments = useAppSelector(state => state.commentSlice.comments);

    useEffect(() => {
        dispatch(commentSliceActions.loadAllComments())
    }, [comments.length, dispatch]);

    return (
        <div>
            {
                comments.map(comment => <CommentComponent comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;