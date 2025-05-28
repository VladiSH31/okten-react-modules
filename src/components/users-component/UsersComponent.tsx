import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {usersService} from "../../services/api.service.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        usersService.getUsers().then((usersAll) => setUsers(usersAll))
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