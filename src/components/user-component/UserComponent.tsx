import './UserComponent.css';
import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserPropsType ={
    user: IUser
}

const UserComponent:FC<UserPropsType> = ({user}) => {
    return (
        <div>
           <div>{user.name}</div>
           <div>{user.id}</div>
           <div>{user.phone}</div>
           <div>{user.email}</div>
        </div>
    );
};

export default UserComponent;