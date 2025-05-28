import './UserComponent.css'
import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserProps = {
    item: IUser
}

const UserComponent:FC<UserProps> = ({item}) => {
    return (
        <div>
            {item.name}
        </div>
    );
};

export default UserComponent;