import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UsersProps= {
    item: IUser
}

const UserComponent:FC<UsersProps> = ({item}) => {
    return (
        <div>
            {item.firstName} {item.lastName}
        </div>
    );
};

export default UserComponent;