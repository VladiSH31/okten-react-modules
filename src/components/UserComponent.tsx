import type {IUser} from "../models/IUser.ts";
import type {FC} from "react";

type UserProps = {
    item: IUser
}
const UserComponent: FC<UserProps> = ({item}) => {
    return (
        <div>
            <div>{item.first_name} {item.last_name}</div>
            <div>{item.avatar}</div>
        </div>
    );
};

export default UserComponent;