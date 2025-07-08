import './UserComponent.css'
import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserProps = {
    user: IUser
}

const UserComponent:FC<UserProps> = ({user}) => {
    return (
        <div>
            <div>{user.name}</div>
            <div>{user.id}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            <div>{user.website}</div>
        </div>
    );
};

export default UserComponent;