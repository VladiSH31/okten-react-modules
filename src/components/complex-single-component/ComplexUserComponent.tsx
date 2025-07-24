import './ComplexSingleComponent.css';
import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

type ComplexUserPropsType = {
    user: IUser,
}

export const ComplexUserComponent:FC<ComplexUserPropsType> = ({user}) => {
    return (
        <div>
            <div>
                <div>{user.name}</div>
                <div>{user.id}</div>
                <div>{user.email}</div>
            </div>
        </div>
    );
};

