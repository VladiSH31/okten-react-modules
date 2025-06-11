import { Link, Outlet } from "react-router-dom";
import './PostsPage.css'

const PostsPage = () => {
    return (
        <div className="posts-page-container bg-gray-50 min-h-screen p-6">
            <div className="posts-blocks-container space-y-4">
                <div className="posts-block">
                    <Link to="jsonplaceholder" className="posts-block-link">
                        Posts JSONPlaceHolder
                    </Link>
                </div>
                <div className="posts-block">
                    <Link to="dummyjson" className="posts-block-link">
                        Posts DummyJSON
                    </Link>
                </div>
            </div>
            <div className="content-container mt-6">
                <Outlet />
            </div>
        </div>
    );
};

export default PostsPage;