import './UserComponent.css'
import type {FC} from "react";
import type {IUserDummyjson} from "../../../models/users/dummyjson/IUserDummyjson.ts";

type UserPropsDummyjson = {
    item: IUserDummyjson
}

const UserComponent:FC<UserPropsDummyjson> = ({ item }) => {
    return (
        <div className="user-dummy-card bg-white shadow-md rounded-lg p-6 mb-4">
            {/* Заголовок */}
            <div className="user-dummy-header flex items-center mb-4">
                <img
                    src={item.image}
                    alt={`${item.firstName} ${item.lastName}`}
                    className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                    <h2 className="text-xl font-bold text-gray-800">
                        {item.firstName} {item.lastName}
                    </h2>
                    <p className="text-sm text-gray-500">ID: {item.id}</p>
                </div>
            </div>

            {/* Основна інформація */}
            <div className="user-dummy-info space-y-2">
                <p>
                    <span className="font-semibold text-gray-700">Username:</span> {item.username}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Email:</span> {item.email}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Phone:</span> {item.phone}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Gender:</span> {item.gender}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Age:</span> {item.age}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Birth Date:</span> {item.birthDate}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Blood Group:</span> {item.bloodGroup}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Eye Color:</span> {item.eyeColor}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Hair:</span> {item.hair.color} ({item.hair.type})
                </p>
            </div>

            {/* Адреса */}
            <div className="user-dummy-address mt-4">
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p>
                    {item.address.address}, {item.address.city}, {item.address.state},{" "}
                    {item.address.postalCode}, {item.address.country}
                </p>
            </div>

            {/* Компанія */}
            <div className="user-dummy-company mt-4">
                <h3 className="text-lg font-semibold text-gray-800">Company</h3>
                <p>
                    <span className="font-semibold text-gray-700">Name:</span> {item.company.name}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Department:</span> {item.company.department}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Title:</span> {item.company.title}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Company Address:</span>{" "}
                    {item.company.address.address}, {item.company.address.city}, {item.company.address.state},{" "}
                    {item.company.address.postalCode}, {item.company.address.country}
                </p>
            </div>

            {/* Банк */}
            <div className="user-dummy-bank mt-4">
                <h3 className="text-lg font-semibold text-gray-800">Bank</h3>
                <p>
                    <span className="font-semibold text-gray-700">Card Number:</span> {item.bank.cardNumber}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Card Type:</span> {item.bank.cardType}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Currency:</span> {item.bank.currency}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">IBAN:</span> {item.bank.iban}
                </p>
            </div>

            {/* Криптовалюта */}
            <div className="user-dummy-crypto mt-4">
                <h3 className="text-lg font-semibold text-gray-800">Crypto</h3>
                <p>
                    <span className="font-semibold text-gray-700">Coin:</span> {item.crypto.coin}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Wallet:</span> {item.crypto.wallet}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Network:</span> {item.crypto.network}
                </p>
            </div>
        </div>
    );
};

export default UserComponent;