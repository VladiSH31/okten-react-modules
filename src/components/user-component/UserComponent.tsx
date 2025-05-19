import {type FC} from 'react';
import type {IUser} from "../../models/IUser.ts";

type UserPropType = {
    user: IUser
}

const UserComponent:FC<UserPropType> = ({user}) => {
    return (
        <div>{user.name}</div>
    );
};

export default UserComponent;