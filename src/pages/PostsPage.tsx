import {useParams} from "react-router-dom";
import UserPostsComponent from "../components/user-posts-component/UserPostsComponent.tsx";

const PostsPage = () => {

    const {userId} = useParams();


    return (
        <div>
            {userId && <UserPostsComponent userId={userId}/>};
        </div>
    );
};

export default PostsPage;