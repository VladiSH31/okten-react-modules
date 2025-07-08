import './UsersComponent.css'
import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {getAllUsers} from "../../services/api.service.tsx";
import FiltredUsersComponent from "../filtred-users-component/FiltredUsersComponent.tsx";

const UsersComponent = () => {

    // Формування масиву юзерів
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {

        getAllUsers().then(value => {
            if (value) {
                console.log('🔄 UsersList rendered')
                setUsers(value)
            } else {
                console.log('Users not found')
            }
        })
    }, []);

    // Пошук користувачів

    const [searchName, setSearchName] = useState('')
    
    // Кнопка клік для тестування

    const [clickCount, setClickCount] = useState(0)


    return (
        <div>
            <h1>Список користувачів</h1>
            <div>
                {/*Робимо кнопку для пошуку за ім'ям*/}
                <label className="block text-sm font-semibold text-gray-800 mb-2">Пошук користувача
                    <input className="w-80 px-4 py-3 bg-white border-2 border-gray-200 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 hover:border-gray-300"
                           type="text" name="user" value={searchName} onChange={event => {
                    setSearchName(event.target.value)
                }}/></label>
            </div>
            <div>
                <p>Кількість кліків: {clickCount}</p>
                <button className={'border'} onClick={() => {
                    setClickCount(clickCount + 1)
                }}>Click here</button>

            </div>
            {
                <FiltredUsersComponent users={users} searchName={searchName}/>
            }
        </div>
    );
};

export default UsersComponent;