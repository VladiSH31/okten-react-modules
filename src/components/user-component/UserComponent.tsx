import {type FC} from "react";
import type {IUserModel} from "../../models/users/IUserModel.ts";
import {useNavigate} from "react-router-dom";

type UsersPropsModel = {
    item: IUserModel
}

export const UserComponent: FC<UsersPropsModel> = ({item}) => {
    const navigate = useNavigate();
    const onButtonClick = () => {
        navigate(item.id + '/carts')
    }

    return <div>
        <div> {item.firstName} {item.lastName}</div>
        <div>{item.email} <button className={'border-2'} onClick={onButtonClick}>click me</button>
        </div>
    </div>
}