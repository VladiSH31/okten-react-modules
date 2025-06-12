import './PostComponent.css'
import type {FC} from "react";
import type {IPostJSONPlaceHolder} from "../../../models/posts/jsonplaceholder/IPostJSONPlaceHolder.ts";

type PostPropsJSONPlaceHolder = {
    item: IPostJSONPlaceHolder
}


const PostComponent:FC<PostPropsJSONPlaceHolder> = ({item}) => {
    return (
        <div>
            <div>{item.title}</div>
            <div>{item.id}</div>
            <div>{item.body}</div>
            <div>{item.userId}</div>
            <div></div>
        </div>
    );
};

export default PostComponent;