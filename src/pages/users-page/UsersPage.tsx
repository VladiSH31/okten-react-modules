import './UsersPage.css'
import {useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {usersSliceActions} from "../../redux/slices/user-slice/userSlice.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";

const UsersPage = () => {
    const {users, loadState} = useAppSelector(state => state.userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(usersSliceActions.loadUsers())
    }, []);


    return (
        <div>
            {!loadState && <div>Loading...</div>}
            {
                users.map(value => <div key={value.id}>{value.name}</div>)
            }
        </div>
    );
};

export default UsersPage;