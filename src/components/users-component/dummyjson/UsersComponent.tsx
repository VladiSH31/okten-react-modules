import './UsersComponent.css'
import {useEffect, useState} from "react";
import type {IUserDummyjson} from "../../../models/users/dummyjson/IUserDummyjson.ts";
import {getDummyJson} from "../../../services/Global.api.service.ts";
import UserComponent from "../../user-component/dummyjson/UserComponent.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUserDummyjson[]>([])
    useEffect(() => {
        getDummyJson('users').then(response => setUsers(response))
    }, []);


    return (
        <div>
            {
                users.map(value => <UserComponent key={value.id} item={value}/>)
            }
        </div>
    );
};

export default UsersComponent;