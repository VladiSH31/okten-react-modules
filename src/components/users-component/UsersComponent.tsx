import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.service.tsx";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [query] = useSearchParams({page: '1'});

    useEffect(() => {
        const currentPage = query.get('page') || '1';

        getUsers(currentPage)
            .then(value => setUsers(value.users))
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