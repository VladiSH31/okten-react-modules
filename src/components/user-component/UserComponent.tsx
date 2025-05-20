import {type FC} from 'react';
import type {IUser} from "../../models/IUser.ts";

type UserPropType = {
    user: IUser
    foo: (item: IUser) => void
}

const UserComponent: FC<UserPropType> = ({user, foo}) => {
    return (
        <div>
            <div>{user.name}</div>
            <button className="border-2" onClick={() => {
                foo(user);
            }}>details</button>
        </div>
    );
};

export default UserComponent;