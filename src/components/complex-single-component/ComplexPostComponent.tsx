import './ComplexSingleComponent.css';
import type {IPost} from "../../models/IPost.ts";
import type {FC} from "react";

type ComplexPostPropsType = {
    post: IPost,
}

const ComplexSingleComponent:FC<ComplexPostPropsType> = ({post}) => {
    return (
        <div>
            <div>
                <div>{post.title}</div>
                <div>{post.id}</div>
                <div>{post.body}</div>
            </div>
        </div>
    );
};

export default ComplexSingleComponent;