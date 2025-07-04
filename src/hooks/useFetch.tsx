import {useEffect, useState} from "react";

export const useFetch = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(value => setUsers(value));
    }, []);
    return users;
}