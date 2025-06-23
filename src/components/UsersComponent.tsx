import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUsersPage} from "../services/api.service.tsx";
import UserComponent from "./UserComponent.tsx";
import type {IUser} from "../models/IUser.ts";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [query] = useSearchParams();

    useEffect(() => {
        const pg = query.get('pg')

        if (pg) {
            getUsersPage(+pg)
                .then(value => setUsers(value.data))
        }

    }, [query]);

    return (
        <div>
            {
                users.map(value => <UserComponent key={value.id} item={value}/>)
            }
        </div>
    );
};

export default UsersComponent;