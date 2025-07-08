import {type FC, memo, useCallback, useMemo} from 'react';
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";

type UsersFilterProps = {
    users: IUser[],
    searchName: string
}


const FiltredUsersComponent:FC<UsersFilterProps> = ({users, searchName}) => {
    // Філтруємо юзерів
    // ВИкористав useMemo на фільтрі, відпрацьовує якщо в інпут вводимо інформацію,
    // якщо ж проводимо маніпуляції з кнопками, фільтрація не відпрацьовує

    const filtredUsers = useMemo(() => {
        console.log('🔍 Filtering...');
        return users.filter(user =>
            user.name.toLowerCase().includes(searchName.toLowerCase())
        );
    }, [users, searchName]);

    // ця функція спрацьовує тільки коли вона використовується і не рендериться повторно якщо відпрацьовує фільтр або кнопка на клік.
    const handleUserClick = useCallback((userName: string) => {
        alert(`Клікнули на ${userName}`);
    }, []);

    return (
        <div>
            <div></div>
            <div>
                <p>Знайдено: {filtredUsers.length}</p>
                {
                    filtredUsers.map(user => <UserComponent key={user.id} item={user} onClick={handleUserClick}/>)
                }
            </div>

        </div>
    );
};

export default memo(FiltredUsersComponent);
// Побачив ще такий спосіб додавання memo, спробував і так. При використанні кнопки у UsersComponent,
// сам компонент FiltredUsersComponent не рендериться повторно