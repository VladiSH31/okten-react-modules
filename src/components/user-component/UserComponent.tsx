import './UserComponent.css'
import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserProps = {
    user: IUser
}

const UserComponent:FC<UserProps> = ({user}) => {
    return (
        <div className="user-card">
            <div className="user-header">
                <h3 className="user-name">{user.name}</h3>
                <span className="user-id">ID: {user.id}</span>
            </div>
            <div className="user-details">
                <div className="user-detail">
                    <span className="detail-icon">📧</span>
                    <span className="detail-text">{user.email}</span>
                </div>
                <div className="user-detail">
                    <span className="detail-icon">📱</span>
                    <span className="detail-text">{user.phone}</span>
                </div>
                <div className="user-detail">
                    <span className="detail-icon">🌐</span>
                    <span className="detail-text">{user.website}</span>
                </div>
            </div>
        </div>
    );
};

export default UserComponent;