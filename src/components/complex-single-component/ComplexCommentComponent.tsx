import './ComplexSingleComponent.css';
import type {IComment} from "../../models/IComment.ts";
import type {FC} from "react";

type ComplexCommentPropsType = {
    comment: IComment
}

const ComplexUserComponent:FC<ComplexCommentPropsType> = ({comment}) => {
    return (
        <div>
            <div>
                <div>{comment.name}</div>
                <div>{comment.id}</div>
                <div>{comment.body}</div>
            </div>
        </div>
    );
};

export default ComplexUserComponent;