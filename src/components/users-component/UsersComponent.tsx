import {useEffect, useState} from 'react';
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [item, setItem] = useState<IUser | null>(null)

    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response)
            });
    }, []);

    const foo = (item: IUser) => {
        setItem(item);
    }

    return (
        <div>
            <div>
                {
                    item && <div>{JSON.stringify(item)}</div>
                }
                {
                    users.map((user: IUser) => <UserComponent foo={foo} key={user.id} user={user}/>)
                }
            </div>
        </div>
    );
};

export default UsersComponent;