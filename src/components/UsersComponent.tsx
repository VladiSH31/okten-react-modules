import {useCallback, useMemo} from "react";
import UserComponent from "./UserComponent.tsx";
import {useFetch} from "../hooks/useFetch.tsx";


const UsersComponent = () => {
    console.log('users');

    const arr:number[] = useMemo(() => {
        return [11,22,33,44]
    }, [])

    const foo = useCallback(() => {
        console.log('useCallback')
    }, [])

    const users = useFetch();
    return (
        <div>
            Users Component
            {
                users.map((value, index) => <UserComponent key={index} item={value} foo={foo} arr={arr}/>)
            }

        </div>
    );
}

export default UsersComponent;