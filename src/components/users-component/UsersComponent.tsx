import {useEffect, useState} from "react";
import type {IUserModel} from "../../models/users/IUserModel.ts";
import {userService} from "../../services/general.api.service.tsx";
import {UserComponent} from "../user-component/UserComponent.tsx";
import type {IUsersResponseModel} from "../../models/IUsersResponseModel.ts";

export function UsersComponent() {
    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        userService.getAllUsers()
            .then(({users}: IUsersResponseModel) => setUsers(users))
    }, []);

    return (
        <div>
            {
                users.map(value => <UserComponent key={value.id} item={value}/>)
            }
        </div>
    );
}