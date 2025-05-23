import './CommentsComponent.css'
import {useEffect, useState} from 'react';
import type {IComment} from "../../models/IComment.ts";
import {loadComments} from "../../service/api.service.ts";
import CommentComponent from "../comment-component/CommentComponent.tsx";

const CommentsComponent = () => {

    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        loadComments().then(value => setComments(value))
    }, []);

    return (
        <div>
            {
                comments.map(value => <CommentComponent key={value.id} comment={value}/>)
            }
        </div>
    );
};

export default CommentsComponent;