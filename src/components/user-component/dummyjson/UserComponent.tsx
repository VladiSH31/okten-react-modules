import './UserComponent.css'
import type {FC} from "react";
import type {IUserDummyjson} from "../../../models/users/dummyjson/IUserDummyjson.ts";

type UserPropsDummyjson = {
    item: IUserDummyjson
}

const UserComponent:FC<UserPropsDummyjson> = ({ item }) => {
    return (
        <div>
            <div>{item.firstName} {item.lastName}</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default UserComponent;