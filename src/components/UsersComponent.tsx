import {useEffect, useState} from "react";
import UserComponent from "./UserComponent.tsx";


const UsersComponent = () => {
    console.log('users');
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(value => setUsers(value));
    }, []);
    return (
        <div>
            Users Component
            <UserComponent/>

        </div>
    );
}

export default UsersComponent;