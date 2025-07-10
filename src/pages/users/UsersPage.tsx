import './UsersPage.css'
import UsersComponent from "../../components/users-component/UsersComponent.tsx";

const UsersPage = () => {
    return (
        <div>
            <div className="p-4">
                <h1 className="text-2xl font-bold text-center mb-2">
                    Users Page
                </h1>
            </div>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;