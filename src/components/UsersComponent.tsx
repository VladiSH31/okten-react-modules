import {useCallback, useEffect, useMemo, useState} from "react";
import UserComponent from "./UserComponent.tsx";


const UsersComponent = () => {
    console.log('users');

    const arr:number[] = useMemo(() => {
        return [11,22,33,44]
    }, [])

    const foo = useCallback(() => {
        console.log('useCallback')
    }, [])

    const [, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(value => setUsers(value));
    }, []);
    return (
        <div>
            Users Component
            <UserComponent foo={foo} arr={arr}/>

        </div>
    );
}

export default UsersComponent;