import './UsersComponent.css'
import {useEffect, useState} from "react";
import type {IUserDummyjson} from "../../../models/users/dummyjson/IUserDummyjson.ts";
import {getDummyJson} from "../../../services/Global.api.service.ts";
import UserComponent from "../../user-component/dummyjson/UserComponent.tsx";
import type {IBaseResponseModel} from "../../../models/IBaseResponseModel.ts";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUserDummyjson[]>([])
    useEffect(() => {
        getDummyJson<IBaseResponseModel & {users: IUserDummyjson[]}>('users')
            .then(({ users }) => setUsers(users))
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