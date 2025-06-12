import './UsersComponent.css'
import {useEffect, useState} from "react";
import type {IUserJSONPlaceHolder} from "../../../models/users/jsonplaceholder/IUserJSONPlaceHolder.ts";
import {getJSONPlaceHolder} from "../../../services/Global.api.service.ts";
import UserComponent from "../../user-component/jsonplaceholder/UserComponent.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUserJSONPlaceHolder[]>([])
    useEffect(() => {
        getJSONPlaceHolder('users')
            .then(response => setUsers(response));
    }, []);

    return (
        <div>
            {
                users.map(value => <UserComponent item={value}/>)
            }
        </div>
    );
};

export default UsersComponent;