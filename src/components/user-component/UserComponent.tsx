import './UserComponent.css'
import {type FC, memo} from "react";
import type {IUser} from "../../models/IUser.ts";

type UsersAndSearchProps = {
    item: IUser,
    onClick: (username: string) => void
}

// При кліку на кнопку у UsersComponent, UserComponent повторно не рендериться
// і цей console.log(`👤 UserComponent: ${item.name}`); виводиться тільки один раз, або повторно якщо фільтрує такого юзера

const UserComponent: FC<UsersAndSearchProps> = memo(
    ({item, onClick}) => {
        console.log(`👤 UserComponent: ${item.name}`);

        return (
            <div>
                <div onClick={() => onClick(item.name)}>
                    <h4>{item.name}</h4>
                    <p>📧 {item.email}</p>
                    <p>🏙️ {item.address.city}</p>
                </div>

            </div>

        );
    }
);

export default UserComponent;