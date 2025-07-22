import {Link, useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {usersSliceActions} from "../../redux/slices/user-slice/userSlice.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import './UserPage.css';

const UserPage = () => {
    const {id} = useParams<{ id: string }>();
    const {user, loadState} = useAppSelector(({userSlice}) => userSlice)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(usersSliceActions.loadUser(id))
        }
    }, [id, dispatch]);

    return (
        <div className="user-page-container">
            <Link to="/users" className="back-link">
                &larr; Back to Users
            </Link>

            {!user && !loadState && <div className="loading-text">Loading...</div>}

            {user && (
                <div className="user-details-card">
                    <h1 className="user-details-name">{user.name}</h1>
                    <p className="user-details-username">@{user.username}</p>

                    <div className="details-group">
                        <div className="detail-item">
                            <h3 className="font-semibold text-gray-800">Email:</h3>
                            <a href={`mailto:${user.email}`} className="text-blue-500 hover:underline">{user.email}</a>
                        </div>
                        <div className="detail-item">
                            <h3 className="font-semibold text-gray-800">Phone:</h3>
                            <p className="text-gray-700">{user.phone}</p>
                        </div>
                        <div className="detail-item">
                            <h3 className="font-semibold text-gray-800">Website:</h3>
                            <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{user.website}</a>
                        </div>
                        <div className="detail-item">
                            <h3 className="font-semibold text-gray-800">Company:</h3>
                            <p className="text-gray-700">{user.company.name}</p>
                        </div>
                        <div className="detail-item">
                            <h3 className="font-semibold text-gray-800">Address:</h3>
                            <p className="text-gray-700">{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserPage;