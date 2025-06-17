import {Outlet} from "react-router-dom";
import {Menu} from "../components/menu/Menu.tsx";

export function MainLayout() {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
}