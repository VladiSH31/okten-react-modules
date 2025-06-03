import './SingleUserDetailsComponent.css'
import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type SingleUserDetailsProps = {
    user: IUser
}

const SingleUserDetailsComponent:FC<SingleUserDetailsProps> = ({user}) => {
    return (
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    );
};

export default SingleUserDetailsComponent;