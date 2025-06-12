import './UserComponent.css'
import type {FC} from "react";
import type {IUserJSONPlaceHolder} from "../../../models/users/jsonplaceholder/IUserJSONPlaceHolder.ts";

type UserPropsJSONPlaceHolder = {
    item: IUserJSONPlaceHolder
}

const UserComponent:FC<UserPropsJSONPlaceHolder> = ({item}) => {
    return (
        <div className="user-card bg-white shadow-md rounded-lg p-6 mb-4">
            {/* Заголовок */}
            <div className="user-header mb-4">
                <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-500">ID: {item.id}</p>
            </div>

            {/* Основна інформація */}
            <div className="user-info space-y-2">
                <p>
                    <span className="font-semibold text-gray-700">Username:</span> {item.username}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Phone:</span> {item.phone}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Email:</span> {item.email}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Website:</span>{" "}
                    <a
                        href={`https://${item.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        {item.website}
                    </a>
                </p>
            </div>

            {/* Адреса */}
            <div className="user-address mt-4">
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p>
                    {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}
                </p>
            </div>

            {/* Компанія */}
            <div className="user-company mt-4">
                <h3 className="text-lg font-semibold text-gray-800">Company</h3>
                <p>
                    <span className="font-semibold text-gray-700">Name:</span> {item.company.name}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Catchphrase:</span> {item.company.catchPhrase}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">BS:</span> {item.company.bs}
                </p>
            </div>
        </div>
    );
};

export default UserComponent;