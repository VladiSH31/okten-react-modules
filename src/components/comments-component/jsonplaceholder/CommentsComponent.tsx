import './CommentsComponent.css'
import {useEffect, useState} from "react";
import type {ICommentsJSONPlaceHolder} from "../../../models/comments/jsonplaceholder/ICommentsJSONPlaceHolder.ts";
import {getJSONPlaceHolder} from "../../../services/Global.api.service.ts";
import CommentComponent from "../../comment-component/jsonplaceholder/CommentComponent.tsx";

const CommentsComponent = () => {

    const [comments, setComments] = useState<ICommentsJSONPlaceHolder[]>([])

    useEffect(() => {
        getJSONPlaceHolder<ICommentsJSONPlaceHolder[]>('comments')
            .then(value => setComments(value))
    }, []);


    return (
        <div>
            {
                comments.map(value => <CommentComponent key={value.id} item={value}/>)
            }
        </div>
    );
};

export default CommentsComponent;