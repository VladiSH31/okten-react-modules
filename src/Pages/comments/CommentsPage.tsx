import { Link, Outlet } from "react-router-dom";
import './CommentsPage.css'

const CommentsPage = () => {
    return (
        <div className="comments-page-container bg-gray-50 min-h-screen p-6">
            <div className="comments-blocks-container space-y-4">
                <div className="comments-block">
                    <Link to="jsonplaceholder" className="comments-block-link">
                        Comments JSONPlaceHolder
                    </Link>
                </div>
                <div className="comments-block">
                    <Link to="dummyjson" className="comments-block-link">
                        Comments DummyJSON
                    </Link>
                </div>
            </div>
            <div className="content-container mt-6">
                <Outlet />
            </div>
        </div>
    );
};

export default CommentsPage;