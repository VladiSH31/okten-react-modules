import './UsersComponent.css';
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice.ts";
import UserComponent from "../user-component/UserComponent.tsx";

const UsersComponent = () => {
    const dispatch = useAppDispatch();
    const {users} = useAppSelector(({userSlice}) => userSlice);

    useEffect(() => {
        dispatch(userSliceActions.loadAllUsers())
    }, []);

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;