import {useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {usersSliceActions} from "../../redux/slices/user-slice/userSlice.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {Link} from "react-router-dom";
import './UsersPage.css';

const UsersPage = () => {
    const {users, loadState} = useAppSelector(state => state.userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!users.length) {
            dispatch(usersSliceActions.loadUsers())
        }
    }, [dispatch, users.length]);


    return (
        <div className="users-container">
            <h1 className="users-title">Users</h1>
            {!loadState && users.length === 0 && <div className="loading-text">Loading...</div>}
            <div className="users-grid">
                {
                    users.map(user => (
                        <Link to={`/users/${user.id}`} key={user.id} className="user-card">
                            <h2 className="user-card-name">{user.name}</h2>
                            <p className="user-card-username">@{user.username}</p>
                            <p className="user-card-link">View Details</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default UsersPage;