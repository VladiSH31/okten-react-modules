import './UsersPage.css'
import {useAppSelector, usersSliceActions} from "../../main.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

const UsersPage = () => {
    const {users} = useAppSelector(state => state.userSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(value => {
                dispatch(usersSliceActions.loadUsers(value))
            })
    }, []);


    return (
        <div>
            {
                users.map(value => <div key={value.id}>{value.name}</div>)
            }
        </div>
    );
};

export default UsersPage;