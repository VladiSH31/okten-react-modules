import {useCallback, useEffect, useState} from "react";
import UserComponent from "./UserComponent.tsx";


const UsersComponent = () => {
    console.log('users');

    const foo = useCallback(() => {
        console.log('useCallback')
    }, [])

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(value => setUsers(value));
    }, []);
    return (
        <div>
            Users Component
            <UserComponent foo={foo}/>

        </div>
    );
}

export default UsersComponent;