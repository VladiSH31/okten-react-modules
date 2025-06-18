import { type FC } from "react";
import type { IUserModel } from "../../models/users/IUserModel.ts";
import { useNavigate } from "react-router-dom";
import './UserComponent.css';

type UsersPropsModel = {
    item: IUserModel;
};

export const UserComponent: FC<UsersPropsModel> = ({ item }) => {
    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate(item.id + '/carts');
    };

    return (
        <div className="user-card">
            <div className="user-info">
                <h3 className="user-name">
                    {item.firstName} {item.lastName}
                </h3>
                <div className="user-details">
                    <span className="user-email">{item.email}</span>
                    <button
                        className="user-button"
                        onClick={onButtonClick}
                    >
                        View Carts
                    </button>
                </div>
            </div>
        </div>
    );
};