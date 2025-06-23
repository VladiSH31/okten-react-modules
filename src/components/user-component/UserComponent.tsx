import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UsersProps= {
    item: IUser
}

const UserComponent:FC<UsersProps> = ({item}) => {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
                {/* Аватар */}
                <div className="flex-shrink-0">
                    <img
                        src={item.image}
                        alt={`${item.firstName} ${item.lastName}`}
                        className="w-12 h-12 rounded-full border border-gray-300 object-cover"
                    />
                </div>

                {/* Основна інформація - займає всю доступну ширину */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-gray-900 text-lg font-medium">
                            {item.firstName} {item.lastName}
                        </h3>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium flex-shrink-0">
                            {item.role}
                        </span>
                    </div>

                    {/* Інформація в дві колонки на великих екранах */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="space-y-1">
                            <p>
                                <span className="font-medium">Email:</span> {item.email}
                            </p>
                            <p>
                                <span className="font-medium">Phone:</span> {item.phone}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p>
                                <span className="font-medium">Age:</span> {item.age} •
                                <span className="font-medium ml-2">Gender:</span> {item.gender}
                            </p>
                            <p>
                                <span className="font-medium">City:</span> {item.address.city}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Додаткова інформація внизу */}
            <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs text-gray-500">
                    <div>
                        <span className="font-medium">Company:</span> {item.company.name}
                    </div>
                    <div>
                        <span className="font-medium">University:</span> {item.university}
                    </div>
                    <div>
                        <span className="font-medium">Blood Group:</span> {item.bloodGroup}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserComponent;