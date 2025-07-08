import './UsersComponent.css'
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {useFetch} from "../../hooks/useFetch.tsx";

const UsersComponent = () => {

    const users = useFetch<IUser>('/users', [])

    return (
        <div>
            {
                users.map(value => <UserComponent key={value.id} user={value}/>)
            }
        </div>
    );
};

export default UsersComponent;