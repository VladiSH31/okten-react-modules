import {Link, Outlet} from "react-router-dom";
import './UsersPage.css'

const UsersPage = () => {
    return (
        <div className="users-page-container bg-gray-50 min-h-screen p-6">
            <div className="users-blocks-container space-y-4">
                <div className="users-block">
                    <Link to="jsonplaceholder" className="users-block-link">
                        Users JSONPlaceHolder
                    </Link>
                </div>
                <div className="users-block">
                    <Link to="dummyjson" className="users-block-link">
                        Users DummyJSON
                    </Link>
                </div>
            </div>
            <div className="content-container mt-6">
                <Outlet />
            </div>
        </div>
    );
};

export default UsersPage;