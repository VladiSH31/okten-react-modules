import './UserComponent.css'
import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";
import {Link, useNavigate} from "react-router-dom";

type UserProps = {
    item: IUser
}

const UserComponent: FC<UserProps> = ({item}) => {

    const navigation = useNavigate();
    const handleOnClick = () => {
        navigation('posts/' + item.id, {state: item})
    }

    return (
        <div>
            <Link to={'details'} state={item}>{item.name}</Link>

            <button
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                onClick={handleOnClick}>Go to Details
            </button>
        </div>
    );
};

export default UserComponent;