import type {FC} from "react";
import type {IUserModel} from "../../models/users/IUserModel.ts";

type UsersPropsModel = {
    item: IUserModel
}

export const UserComponent: FC<UsersPropsModel> = ({item}) => {
    return <div>
        <div> {item.firstName} {item.lastName}</div>
        <div>{item.email} <button className={'border-2'}>click me</button>
        </div>
    </div>
}