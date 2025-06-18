import {UsersComponent} from "../components/users-component/UsersComponent.tsx";
import {Outlet} from "react-router-dom";

export function UsersPage() {
    return (
        <div>
            <Outlet/>
            <hr/>
            <UsersComponent/>
        </div>
    );
}